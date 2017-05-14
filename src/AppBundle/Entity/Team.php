<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Team
 *
 * @ORM\Table(name="teams")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\TeamRepository")
 */
class Team
{
    /**
     * @var int
     *
     * @ORM\Column(name="team_ID", type="integer")
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
     * @ORM\OneToMany(targetEntity="Game", mappedBy="teamOne")
     */
    private $gamesAsHost;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="Game", mappedBy="teamTwo")
     */
    private $gamesAsGuests;

    /**
     * @var string
     *
     * @ORM\Column(name="logo", type="string", length=255, nullable=true)
     * @Groups({"standard", "standard-bet-info"})
     */
    private $logo;

    /**
     * League constructor.
     */
    public function __construct()
    {
        $this->gamesAsHost = new ArrayCollection();
        $this->gamesAsGuests = new ArrayCollection();
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
     * @return Team
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
    public function getGamesAsHost()
    {
        return $this->gamesAsHost;
    }

    /**
     * @param ArrayCollection $gamesAsHost
     */
    public function setGamesAsHost($gamesAsHost)
    {
        $this->gamesAsHost = $gamesAsHost;
    }

    /**
     * @param Game $game
     */
    public function addGameAsHost(Game $game){
        $this->gamesAsHost->add($game);
        $game->setTeamOne($this);
    }

    /**
     * @param Game $game
     */
    public function removeGameAsHost(Game $game){
        $this->gamesAsHost->remove($game);
        $game->setTeamOne(null);
    }


    /**
     * @return ArrayCollection
     */
    public function getGamesAsGuest()
    {
        return $this->gamesAsGuests;
    }

    /**
     * @param ArrayCollection $gamesAsHost
     */
    public function setGamesAsGuest($gamesAsHost)
    {
        $this->gamesAsGuests = $gamesAsHost;
    }

    /**
     * @param Game $game
     */
    public function addGameAsGuest(Game $game){
        $this->gamesAsGuests->add($game);
        $game->setTeamTwo($this);
    }

    /**
     * @param Game $game
     */
    public function removeGameAsGuest(Game $game){
        $this->gamesAsGuests->remove($game);
        $game->setTeamTwo(null);
    }

    /**
     * @return ArrayCollection
     */
    public function getGamesAsGuests()
    {
        return $this->gamesAsGuests;
    }

    /**
     * @param ArrayCollection $gamesAsGuests
     */
    public function setGamesAsGuests($gamesAsGuests)
    {
        $this->gamesAsGuests = $gamesAsGuests;
    }

    /**
     * @return string
     */
    public function getLogo()
    {
        return $this->logo ? $this->logo : 'img/teams_logo/default_logo.png';
    }

    /**
     * @param string $logo
     */
    public function setLogo($logo)
    {
        $this->logo = $logo;
    }
}

