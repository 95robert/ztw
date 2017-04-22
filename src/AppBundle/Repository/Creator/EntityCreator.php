<?php
/**
 * Created by PhpStorm.
 * User: Robert Przybylski
 * Date: 2017-04-22
 * Time: 11:31
 */

namespace AppBundle\Repository\Creator;


use Doctrine\ORM\EntityManager;

abstract class EntityCreator
{
    /**
     * @var EntityManager
     */
    protected $_em;

    /**
     * EntityCreator constructor.
     * @param $em
     */
    public function __construct($em){
        $this->_em = $em;
    }

    /**
     * Funkcja tworząca encje
     *
     * @param $date
     * @return mixed
     */
    public abstract function create($date);

    /**
     * Funkcja tworząca zbiór encji z tablicy
     *
     * @param $arr
     * @return mixed
     */
    public function createFromArray($arr){
        foreach ($arr as $team) {
            $this->create($team);
        }
    }

}