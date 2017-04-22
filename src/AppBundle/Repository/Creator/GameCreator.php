<?php

namespace AppBundle\Repository\Creator;

use AppBundle\Entity\Game;

/**
 * LeagueCreator
 *
 */
class GameCreator extends EntityCreator
{
    public function create($date){
        $em = $this->_em;

        $teamOne = (new TeamCreator($em))->create(array('name' => $date['team_one']));
        $teamTwo = (new TeamCreator($em))->create(array('name' => $date['team_two']));
        $league = (new LeagueCreator($em))->create(array('name' => $date['league']));

        if($teamOne && $teamTwo && $league){
            $game = $em->getRepository(Game::class)->findOneBy(array(
                'teamOne' => $teamOne,
                'teamTwo' => $teamTwo,
                'league' => $league,
                'date' => new \DateTime($date['date'].' '.$date['time']),
            ));
            if(!$game){
                $game = new Game($teamOne, $teamTwo, $league, $date['date'], $date['time']);
                $em->persist($game);
                $em->flush();
            }
            return $game;
        }
        return null;
    }
}
