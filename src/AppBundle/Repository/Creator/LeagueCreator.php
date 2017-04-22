<?php

namespace AppBundle\Repository\Creator;

use AppBundle\Entity\League;

/**
 * LeagueCreator
 *
 */
class LeagueCreator extends EntityCreator
{
    public function create($date){
        $em = $this->_em;
        if(array_key_exists('name', $date) && $date['name'] != ''){
            $name = $date['name'];
            $league = $em->getRepository(League::class)->findOneByName($name);
            if(!$league){
                $league = new League();
                $league->setName($name);
                $em->persist($league);
                $em->flush();
            }
            return $league;
        }
        return null;
    }
}
