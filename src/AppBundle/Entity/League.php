<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * League
 *
 * @ORM\Table(name="leagues")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\LeagueRepository")
 */
class League
{
    /**
     * @var int
     *
     * @ORM\Column(name="league_ID", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @Groups({"standard", "standard-bet-info"})
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255)
     * @Groups({"standard", "standard-bet-info"})
     */
    private $name;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="Game", mappedBy="league")
     */
    private $games;

    /**
     * League constructor.
     */
    public function __construct()
    {
        $this->games = new ArrayCollection();
    }

    /**
     * Get id
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return League
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return ArrayCollection
     */
    public function getGames()
    {
        return $this->games;
    }

    /**
     * @param ArrayCollection $games
     */
    public function setGames($games)
    {
        $this->games = $games;
    }

    /**
     * @param Game $game
     */
    public function addGame(Game $game){
        $this->games->add($game);
        $game->setLeague($this);
    }

    /**
     * @param Game $game
     */
    public function removeGame(Game $game){
        $this->games->remove($game);
        $game->setLeague(null);
    }
}

