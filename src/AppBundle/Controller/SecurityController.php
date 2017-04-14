<?php

namespace AppBundle\Controller;

use AppBundle\Entity\Role;
use DateTime;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\User;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Http\Event\InteractiveLoginEvent;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;

class SecurityController extends Controller
{
    /**
     * Akcja odpowiedzialna za rejestracja,
     * wymaga:
     *  - email
     *  - login
     *  - password
     *  - repassword
     *
     * zwraca:
     *  - ok - określa, czy udało się zarejestrować
     *  - error_code - kod błędu(
     *         1 - login jest zajęty
     *         2 - email jest zajety
     *         3 - hasła się nie zgadzają
     *         4 - hasło za krótkie
     *      )
     *  - error_msg - opis błędu
     *
     * @Route("/api/register", name="register")
     * @Method({"GET", "POST"})
     */
    public function registerAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $validUser = true;
        $errorCode = 0;
        $errorMsg = '';

        $data = json_decode(file_get_contents('php://input'));
        $data = json_decode(json_encode($data), True);

        //$data = $_GET;

        $login = array_key_exists('login', $data) ? $data['login']: '';
        $email = array_key_exists('email', $data) ? $data['email']: '';
        $password = array_key_exists('password', $data) ? $data['password']: '';
        $repassword = array_key_exists('repassword', $data) ? $data['repassword']: '';

        //login zajęty
        if(count($em->getRepository(User::class)->findByLogin($login)) > 0){
            $validUser = false;
            $errorCode = 1;
            $errorMsg = 'This login is used';
        }

        //email zajęty
        if(count($em->getRepository(User::class)->findByEmail($email)) > 0){
            $validUser = false;
            $errorCode = 2;
            $errorMsg = 'This email is used';
        }

        //password repeat error
        if ($password != $repassword) {
            $validUser = false;
            $errorCode = 3;
            $errorMsg = 'Passwords dont match';
        }

        //password length error
        if (strlen($password) < 6) {
            $validUser = false;
            $errorCode = 4;
            $errorMsg = 'Passwords is too short, minimum 6 chars';
        }

        if($validUser){
            $userRole = $em->getRepository(Role::class )->findOneByRole('ROLE_USER');
            if(!$userRole){
                $userRole = $this->addUsersRoles();
            }
            $user = new User();

            $user->setLogin($login);
            $user->setEmail($email);
            $user->addRole($userRole);
            $encodedPassword = $this->get('security.password_encoder')
                ->encodePassword($user, $password);
            $user->setPassword($encodedPassword);
            $em->persist($user);
            $em->flush();
        }

        $response = new JsonResponse();
        $response->setData(array(
            'ok' => $validUser,
            'error_code' => $errorCode,
            'error_meg' => $errorMsg
        ));
        return $response;
    }

    /**
     * Akcja odpowiedzialna za logowanie,
     * wymaga:
     *  - login
     *  - password
     *
     * zwraca:
     *  - ok - określa, czy udało się zalogować
     *  - error_code - kod błędu(
     *         1 - użytkownik nie istnieje
     *         2 - hasło się nie zgadza
     *      )
     *  - error_msg - opis błędu
     * @Route("/api/login", name="login")
     * @Method({"GET", "POST"})
     */
    public function loginAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $validLogin = true;
        $errorCode = 0;
        $errorMsg = '';

        $data = json_decode(file_get_contents('php://input'));
        $data = json_decode(json_encode($data), True);

//        $data = $_GET;

        $username = array_key_exists('username', $data) ? $data['username']: '';
        $password = array_key_exists('password', $data) ? $data['password']: '';

        $user = $em->getRepository(User::class)->findOneByEmail($username);
        if(!$user) $user = $em->getRepository(User::class)->findOneByLogin($username);

        if ($user) {
            $encoder_service = $this->get('security.encoder_factory');
            $encoder = $encoder_service->getEncoder($user);

            if ($encoder->isPasswordValid($user->getPassword(), $password, $user->getSalt())) {
                $this->loginUser($user, $password);
            } else {
                $validLogin = false;
                $errorCode = 2;
                $errorMsg = "Wrong password";
            }
        } else {
            $validLogin = false;
            $errorCode = 1;
            $errorMsg = "Wrong login or email";
        }
        $response = new JsonResponse();
        $response->setData(array(
            'ok' => $validLogin,
            'error_code' => $errorCode,
            'error_meg' => $errorMsg
        ));
        return $response;
    }

    /**
     * @Route("/api/logout", name="logout")
     * @Method({"GET"})
     */
    public function logoutAction(Request $request)
    {
        $this->get('security.token_storage')->setToken(null);
        $request->getSession()->invalidate();
        $response = new JsonResponse();
        $response->setData(1);
        return $response;
    }

    public function loginUser($user, $password)
    {
        $token = new UsernamePasswordToken($user, $password, 'public', $user->getRoles());
        $this->get("security.token_storage")->setToken($token);

        // Fire the login event;
        $request = $this->get("request_stack");
        $event = new InteractiveLoginEvent($request->getCurrentRequest(), $token);
        $this->get("event_dispatcher")->dispatch("security.interactive_login", $event);
    }

    public function addUsersRoles(){
        $adminRole = new Role();
        $adminRole->setRole('ROLE_ADMIN');
        $adminRole->setDescription('default');
        $this->getDoctrine()->getManager()->persist($adminRole);

        $userRole = new Role();
        $userRole->setRole('ROLE_USER');
        $userRole->setDescription('default');
        $this->getDoctrine()->getManager()->persist($userRole);

        $this->getDoctrine()->getManager()->flush();

        return $userRole;
    }
}
