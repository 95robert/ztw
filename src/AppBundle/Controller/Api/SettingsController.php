<?php

namespace AppBundle\Controller\Api;

use AppBundle\Entity\Game;
use AppBundle\Entity\League;
use AppBundle\Entity\Role;
use AppBundle\Entity\Team;
use AppBundle\Entity\UserBet;
use AppBundle\Repository\Creator\UserBetCreator;
use AppBundle\Repository\Editor\UserEditor;
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

/**
 *
 * @Route("/api/settings")
 */
class SettingsController extends Controller
{
    /**
     * Akcja zwraca dane na temat ustawień typera.
     *
     * zwraca:
     * - array
     *      - id
     *      - login
     *      - subscription_cost
     *      - image
     *      - about
     *
     * @Route("/")
     * @Method({"GET"})
     */
    public function showAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $serializeManager = $this->get('serialize_manager');
        return $serializeManager->serializeObjectToResponse($this->getUser(), array('settings'), array(), array());
    }

    /**
     * Akcja obsługuje edycja ustawień typera
     *
     * parametry:
     *      - subscription_cost
     *      - password
     *      - repassword
     *      - image
     *      - about
     * zwraca:
     *      - ok: {0, 1}
     *      - errorCode: {
     *                      1 - nieprawidłowa wartość subscription_cost,
     *                      2 - hasła do siebie nie pasują,
     *                      3 - hasło za krótkie,
     *                      4 - upload avatara się nie powiódł
     *                   }
     *
     * @Route("/edit")
     * @Method({"GET", "POST"})
     */
    public function editAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $serializeManager = $this->get('serialize_manager');

        $data = json_decode(file_get_contents('php://input'));
        $data = json_decode(json_encode($data), True);

        $data = $_GET;

        $result = (new UserEditor($this->container))->edit($this->getUser(), $data);

        return $serializeManager->serializeObjectToResponse(null, [], $result, []);
    }
}
