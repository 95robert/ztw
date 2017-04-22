<?php

namespace AppBundle\Controller\Api;

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
 * @Route("/api/team")
 */
class TeamController extends Controller
{
    /**
     * Akcja zwraca listę wszystkich drużyn.
     *
     * zwraca:
     * - array
     *      - id
     *      - name
     *
     * @Route("/")
     * @Method({"GET"})
     */
    public function showAction(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $serializeManager = $this->get('serialize_manager');
        $teams = $em->getRepository(Team::class)->findAll();
        return $serializeManager->serializeObjectToResponse($teams, array('standard'), array(), array());
    }
}
