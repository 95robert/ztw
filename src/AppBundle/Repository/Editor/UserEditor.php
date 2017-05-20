<?php

namespace AppBundle\Repository\Editor;

use AppBundle\Entity\Game;
use AppBundle\Entity\League;
use AppBundle\Entity\User;
use AppBundle\Entity\UserBet;

/**
 * UserEditor
 *
 */
class UserEditor
{
    private $container;

    /**
     * UserEditor constructor.
     */
    public function __construct($container)
    {
        $this->container = $container;
    }

    public function edit(User $user, $newData){
        $ok = 1;
        $errorCode = 0;

        if(array_key_exists('subscription_cost', $newData)){
            if(floatval($newData['subscription_cost']) == 0){
                $ok = 0;
                $errorCode = 1;
            }else{
                $user->setSubscriptionCost(floatval($newData['subscription_cost']));
            }
        }

        if(array_key_exists('about', $newData)){
            $user->setAbout($newData['about']);
        }

        if(array_key_exists('password', $newData)){
            $password = $newData['password'];
            $repassword = array_key_exists('repassword', $newData) ? $newData['repassword'] : '';

            if($password != $repassword){
                $ok = 0;
                $errorCode = 2;
            }
            if(strlen($password) < 6){
                $ok = 0;
                $errorCode = 3;
            }

            if($ok == 1){
                $encodePassword = $this->container->get('security.password_encoder')
                    ->encodePassword($user, $password);
                $user->setPassword($encodePassword);
            }
        }

        $this->container->get('doctrine.orm.entity_manager')->flush();
        return array(
            'ok' => $ok,
            'errorCode' => $errorCode,
        );
    }
}
