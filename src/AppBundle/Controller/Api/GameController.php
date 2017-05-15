<?php

namespace AppBundle\Controller\Api;

use AppBundle\Entity\Game;
use AppBundle\Entity\League;
use AppBundle\Entity\Role;
use AppBundle\Entity\Team;
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
 * @Route("/api/game")
 */
class GameController extends Controller
{
    /**
     * Akcja zwraca listę wszystkich meczy.
     *
     * zwraca:
     * - array
     *      - id
     *      - date
     *      - teamOneScore
     *      - teamTwoScore
     *      - league
     *      - teamOne
     *      - teamTwo
     *
     * @Route("/")
     * @Method({"GET"})
     */
    public function showAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $serializeManager = $this->get('serialize_manager');
        $games = $em->getRepository(Game::class)->findAll();
        return $serializeManager->serializeObjectToResponse($games, array('standard'), array(), array());
    }

    /**
     * Akcja zwraca listę przefiltrowaną listę meczy.
     *
     * parametry:
     *  - league - id ligi
     *  - team - id drużyny
     *  - minDate - format (01-01-2000)
     *  - maxDate - format (01-01-2000)
     * zwraca:
     * - array
     *      - id
     *      - date
     *      - teamOneScore
     *      - teamTwoScore
     *      - league
     *      - teamOne
     *      - teamTwo
     *
     * @Route("/filter")
     * @Method({"GET", "POST"})
     */
    public function filterAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $serializeManager = $this->get('serialize_manager');
        $data = json_decode(file_get_contents('php://input'));
        $data = json_decode(json_encode($data), True);
        //$data = $_GET;
        $leagues = $em->getRepository(Game::class)->findWithFilterOptions($data);
        return $serializeManager->serializeObjectToResponse($leagues, array('standard'), array(), array());
    }

    /**
     * Akcja zwraca dane na temat meczu.
     *
     * zwraca:
     *      - id
     *      - date
     *      - teamOneScore
     *      - teamTwoScore
     *      - league
     *      - teamOne
     *      - teamTwo
     *
     * @Route("/{id}")
     * @Method({"GET"})
     */
    public function showGameAction(Request $request, Game $game)
    {
        $em = $this->getDoctrine()->getManager();
        $serializeManager = $this->get('serialize_manager');

        return $serializeManager->serializeObjectToResponse($game, array('standard'), [], array());
    }
}
