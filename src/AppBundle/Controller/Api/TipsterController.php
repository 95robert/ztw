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
 * @Route("/api/tipster")
 */
class TipsterController extends Controller
{
    /**
     * Akcja zwraca dane na temat typera.
     *
     * zwraca:
     * - array
     *      - id
     *      - login
     *      - efficiency
     *      - efficiency_last_3_month
     *      - efficiency_last_month
     *      - yield - to taka jakby stopa zwrotu
     *      - sold_single_bet
     *      - sold_subscriptions
     *      - count_of_currents_bets
     *      - count_of_bets
     *      - subscription_cost
     *
     * @Route("/show/{id}")
     * @Method({"GET"})
     */
    public function showAction(Request $request, User $tipster)
    {
        $em = $this->getDoctrine()->getManager();
        $serializeManager = $this->get('serialize_manager');
        $statisticsFields = $em->getRepository(User::class)->getStatisticsInfoForTipster($tipster);

        return $serializeManager->serializeObjectToResponse($tipster, array('tipster'), $statisticsFields, array());
    }

    /**
     * Akcja zwraca listę przefiltrowaną listę typów.
     *
     * parametry:
     *  - sortedBy - string {
     *          - efficiency
     *          - efficiency_last_3_month
     *          - efficiency_last_month
     *          - yield_value - to taka jakby stopa zwrotu
     *          - sold_single_bet
     *          - sold_subscriptions
     *          - count_of_currents_bets
     *          - count_of_bets
     *          - subscription_cost
     *      }
     *  - orderBy - int { 3, 4 } (3 - ASC, 4 - DESC)
     *  - filters - array {
     *          maxPrice: <value>
     *          minPrice: <value>
     *      }
     * zwraca:
     * - array - tablicę posortowanych typerów
     *      - array
     *          - id
     *          - login
     *          - efficiency
     *          - efficiency_last_3_month
     *          - efficiency_last_month
     *          - yield_value - to taka jakby stopa zwrotu
     *          - sold_single_bet
     *          - sold_subscriptions
     *          - count_of_currents_bets
     *          - count_of_bets
     *          - subscription_cost
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
        $data = !is_array($data) ? []:$data;
        $sortedBy = array_key_exists('sortedBy', $data) ? $data['sortedBy'] : 'count_of_currents_bets';
        $orderBy = array_key_exists('orderBy', $data) ? $data['orderBy'] : SORT_DESC;
        $filters = array_key_exists('filters', $data) ? $data['filters'] : array();

        $sortedTipsters = $em->getRepository(User::class)->getSortedTipsters($sortedBy, $orderBy, $filters);

        return $serializeManager->arrayOfObjectsWithExtraFields(
                    $sortedTipsters,
                    $em->getRepository(User::class),
                    array('tipster'));
    }
}
