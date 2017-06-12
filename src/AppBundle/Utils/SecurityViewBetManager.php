<?php
/**
 * Created by PhpStorm.
 * User: Robert Przybylski
 * Date: 2017-04-02
 * Time: 19:31
 */

namespace AppBundle\Utils;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;

/**
 * Manager obsługujący określanie czy użytkownik ma uprawnienia do zobaczenia typu
 *
 * Class SecurityViewBetManager
 * @package AppBundle\Utils
 */
class SecurityViewBetManager
{
    public $container;

    /**
     * SerializeManager constructor.
     * @param $container
     */
    public function __construct($container)
    {
        $this->container = $container;
    }

    /**
     * Funkcja która dzieli kolekcję typów na te które zalogowany użytkownik może zobaczyć i nie może zobaczyć
     *
     * @param $bets
     * @return array
     */
    public function selectBets($bets)
    {
        $user = $this->container->get('security.token_storage')->getToken()->getUser();
        $allowedBets = array();
        $notAllowedBets = array();
        if($user == "anon."){
            $notAllowedBets = $bets;
        //}else if($user->hasRole('ROLE_ADMIN'){

        }else{
            foreach($bets as $bet){
                if($this->userCanSeeBet($bet)){
                    $allowedBets[] = $bet;
                }else{
                    $notAllowedBets[] = $bet;
                }
            }
        }

        return array(
            'allowedBets' => $allowedBets,
            'notAllowedBets' => $notAllowedBets,
        );
    }

    /**
     * Funkcja która określa czy zalogowany użytkownik może zobaczyć dany typ
     *
     * @param $bet
     * @return bool
     */
    public function userCanSeeBet($bet){
        return true;
        $user = $this->container->get('security.token_storage')->getToken()->getUser();
        if($bet->getCost() > 0 && $user != $bet->getUser()){
            //@TODO UPROWADZANIE WARUNKÓW KIEDY USER MOŻE ZOBACZYC TYP
            return false;
        }
        return true;
    }
}