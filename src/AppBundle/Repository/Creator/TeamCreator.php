<?php

namespace AppBundle\Repository\Creator;

use AppBundle\Entity\Team;

/**
 * LeagueCreator
 *
 */
class TeamCreator extends EntityCreator
{
    public function create($date){
        $em = $this->_em;
        if(array_key_exists('name', $date) && $date['name'] != ''){
            $name = $date['name'];
            $team = $em->getRepository(Team::class)->findOneByName($name);
            if(!$team){
                $team = new Team();
                $team->setName($name);
                $em->persist($team);
                $em->flush();
            }
            return $team;
        }
        return null;
    }
}
