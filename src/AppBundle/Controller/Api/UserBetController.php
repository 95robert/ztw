<?php

namespace AppBundle\Controller\Api;

use AppBundle\Entity\Game;
use AppBundle\Entity\League;
use AppBundle\Entity\Role;
use AppBundle\Entity\Team;
use AppBundle\Entity\UserBet;
use AppBundle\Repository\Creator\UserBetCreator;
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
 * @Route("/api/bet")
 */
class UserBetController extends Controller
{
    /**
     * Akcja zwraca listę wszystkich meczy.
     *
     * zwraca:
     * - array
     *      - id
     *      - cost - koszt pokazania typu
     *      - odds - kurs
     *      - stake - stawka
     *      - result - co typuje użytkownik 0-remis 1-wygrana gospodarza 2-wygrana gościa
     *               - gdy użytkownik nie ma uprawnień żeby to widzieć to nie ma w ogóle result
     *      - status - czy typ już został oceniony (-1 - przegrany, 0-mecz jeszcze się nie odbył, 1- wygrany)
     *      - user - typer
     *      - game
     *
     * @Route("/")
     * @Method({"GET"})
     */
    public function showAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $serializeManager = $this->get('serialize_manager');
        $securityViewBetManager = $this->get('security_view_bet_manager');
        $bets = $em->getRepository(UserBet::class)->findAll();

        $selectedBets = $securityViewBetManager->selectBets($bets);
        $notAllowedBets = $serializeManager->serializeObject($selectedBets['notAllowedBets'], array('standard-bet-info'), array(), array());
        return $serializeManager->serializeObjectToResponse($selectedBets['allowedBets'], array('standard-bet-info', 'result-bet-info'), $notAllowedBets, array());
    }

    /**
     * Akcja zwraca listę przefiltrowaną listę typów.
     *
     * parametry:
     *  - id - id typu
     *  - game - id meczu
     *  - user - id typera
     *  - cost - maksymalny koszt
     * zwraca:
     * - array
     *      - id
     *      - cost - koszt pokazania typu
     *      - odds - kurs
     *      - stake - stawka
     *      - result - co typuje użytkownik 0-remis 1-wygrana gospodarza 2-wygrana gościa
     *               - gdy użytkownik nie ma uprawnień żeby to widzieć to nie ma w ogóle result
     *      - status - czy typ już został oceniony (-1 - przegrany, 0-mecz jeszcze się nie odbył, 1- wygrany)
     *      - user - typer
     *      - game
     *
     * @Route("/filter")
     * @Method({"GET"})
     */
    public function filterAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $serializeManager = $this->get('serialize_manager');
        $securityViewBetManager = $this->get('security_view_bet_manager');
        $data = json_decode(file_get_contents('php://input'));
        $data = json_decode(json_encode($data), True);
        $data = $_GET;

        $bets = $em->getRepository(UserBet::class)->findWithFilterOptions($data);
        $selectedBets = $securityViewBetManager->selectBets($bets);
        $notAllowedBets = $serializeManager->serializeObject($selectedBets['notAllowedBets'], array('standard-bet-info'), array(), array());
        return $serializeManager->serializeObjectToResponse($selectedBets['allowedBets'], array('standard-bet-info', 'result-bet-info'), $notAllowedBets, array());
    }

    /**
     * Akcja dodaający nowy typ.
     *
     * parametry:
     *   - cost - koszt pokazania typu
     *   - odds - kurs
     *   - stake - stawka
     *   - result - co typuje użytkownik 0-remis 1-wygrana gospodarza 2-wygrana gościa
     *   - game - id meczu
     * zwraca:
     *  - ok - true/false
     *
     * @Route("/add")
     * @Method({"GET"})
     */
    public function addAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $validator = $this->get('validator');
        $data = json_decode(file_get_contents('php://input'));
        $data = json_decode(json_encode($data), True);
        $data = $_GET;
        $data['user'] = $this->getUser();

        $userBet = (new UserBetCreator($em))->create($data, $validator);

        $response = new JsonResponse();
        $response->setData(array(
            'ok' => $userBet != null,
        ));
        return $response;
    }
}
