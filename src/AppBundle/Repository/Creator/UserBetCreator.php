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

        $game = $em->getRepository(Game::class)->findOneById($date['game']);

        $userBet = $em->getRepository(UserBet::class)->findOneBy(array(
            'user' => $date['user'],
            'game' => $game,
        ));

        if($userBet == null){
            $userBet = new UserBet();
            $userBet->setUser($date['user']);
            $userBet->setGame($game);
            if($validator == null || count($validator->validate($userBet)) == 0) {
                $em->persist($userBet);
            }
        }

        $userBet->setCost($date['cost']);
        $userBet->setOdds($date['odds']);
        $userBet->setResult($date['result']);
        $userBet->setStake($date['stake']);

        if($date['result'] != -1){
            if($validator == null || count($validator->validate($userBet)) == 0){
                $em->flush();
                return $userBet;
            }
        }else{
            $em->remove($userBet);
            $em->flush();
        }
        return null;
    }
}
