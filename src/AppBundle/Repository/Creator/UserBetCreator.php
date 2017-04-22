<?php

namespace AppBundle\Repository\Creator;

use AppBundle\Entity\Game;
use AppBundle\Entity\League;
use AppBundle\Entity\UserBet;

/**
 * LeagueCreator
 *
 */
class UserBetCreator extends EntityCreator
{
    public function create($date, $validator = null){
        $em = $this->_em;

        $userBet = new UserBet();
        $userBet->setUser($date['user']);
        $userBet->setCost($date['cost']);
        $userBet->setGame($em->getRepository(Game::class)->findOneById($date['game']));
        $userBet->setOdds($date['odds']);
        $userBet->setResult($date['result']);
        $userBet->setStake($date['stake']);

        if($validator == null || count($validator->validate($userBet)) == 0){
            $em->persist($userBet);
            $em->flush();
            return $userBet;
        }else{
            return null;
        }
    }
}
