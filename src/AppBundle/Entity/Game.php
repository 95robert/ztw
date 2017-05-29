<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Game
 *
 * @ORM\Table(name="games")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\GameRepository")
 */
class Game
{
    /**
     * @var int
     *
     * @ORM\Column(name="game_ID", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @Groups({"standard", "standard-bet-info"})
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="datetime")
     * @Groups({"standard", "standard-bet-info"})
     */
    private $date;

    /**
     * @var int
     *
     * @ORM\Column(name="team_one_score", type="integer", nullable=true)
     * @Groups({"standard", "standard-bet-info"})
     */
    private $teamOneScore;

    /**
     * @var int
     *
     * @ORM\Column(name="team_two_score", type="integer", nullable=true)
     * @Groups({"standard", "standard-bet-info"})
     */
    private $teamTwoScore;

    /**
     * @ORM\ManyToOne(targetEntity="League", inversedBy="games")
     * @ORM\JoinColumn(name="league_id", referencedColumnName="league_ID")
     * @Groups({"standard", "standard-bet-info"})
     */
    private $league;

    /**
     * @ORM\ManyToOne(targetEntity="Team", inversedBy="games")
     * @ORM\JoinColumn(name="team_one_id", referencedColumnName="team_ID")
     * @Groups({"standard", "standard-bet-info"})
     */
    private $teamOne;

    /**
     * @ORM\ManyToOne(targetEntity="Team", inversedBy="games")
     * @ORM\JoinColumn(name="team_two_id", referencedColumnName="team_ID")
     * @Groups({"standard", "standard-bet-info"})
     */
    private $teamTwo;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="UserBet", mappedBy="game")
     */
    private $usersBets;

    /**
     * Game constructor.
     */
    public function __construct($teamOne = null, $teamTwo = null, $league= null, $date = null, $time = null)
    {
        $this->teamOne = $teamOne;
        $this->teamTwo = $teamTwo;
        $this->league = $league;
        $this->date = new \DateTime($date.' '.$time);
        $this->usersBets = new ArrayCollection();
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
     * Set date
     *
     * @param \DateTime $date
     *
     * @return Game
     */
    public function setDate($date)
    {
        $this->date = $date;

        return $this;
    }

    /**
     * Get date
     *
     * @return \DateTime
     */
    public function getDate()
    {
        return $this->date;
    }

    /**
     * Set teamOneScore
     *
     * @param integer $teamOneScore
     *
     * @return Game
     */
    public function setTeamOneScore($teamOneScore)
    {
        $this->teamOneScore = $teamOneScore;

        return $this;
    }

    /**
     * Get teamOneScore
     *
     * @return int
     */
    public function getTeamOneScore()
    {
        return $this->teamOneScore;
    }

    /**
     * Set teamTwoScore
     *
     * @param integer $teamTwoScore
     *
     * @return Game
     */
    public function setTeamTwoScore($teamTwoScore)
    {
        $this->teamTwoScore = $teamTwoScore;

        return $this;
    }

    /**
     * Get teamTwoScore
     *
     * @return int
     */
    public function getTeamTwoScore()
    {
        return $this->teamTwoScore;
    }

    /**
     * @return League
     */
    public function getLeague()
    {
        return $this->league;
    }

    /**
     * @param League $league
     */
    public function setLeague(League $league)
    {
        $this->league = $league;
    }

    /**
     * @return Team
     */
    public function getTeamOne()
    {
        return $this->teamOne;
    }

    /**
     * @param Team $teamOne
     */
    public function setTeamOne(Team $teamOne)
    {
        $this->teamOne = $teamOne;
    }

    /**
     * @return Team
     */
    public function getTeamTwo()
    {
        return $this->teamTwo;
    }

    /**
     * @param Team $teamTwo
     */
    public function setTeamTwo(Team $teamTwo)
    {
        $this->teamTwo = $teamTwo;
    }

    /**
     * @return ArrayCollection
     */
    public function getUsersBets()
    {
        return $this->usersBets;
    }

    /**
     * @param ArrayCollection $usersBets
     */
    public function setUsersBets($usersBets)
    {
        $this->usersBets = $usersBets;
    }

    /**
     * @param UserBet $usersBets
     */
    public function addUsersBet(UserBet $usersBets){
        $this->usersBets->add($usersBets);
        $usersBets->setGame($this);
    }

    /**
     * @param UserBet $usersBets
     */
    public function removeUsersBet(UserBet $usersBets){
        $this->usersBets->remove($usersBets);
        $usersBets->setGame(null);
    }

    public function __toString(){
        $date = $this->date->format("d-m-Y");
        return '('.$this->league.') '.$this->teamOne.' - '.$this->teamTwo.' - '.$date.' - ('.$this->teamOneScore.'-'.$this->teamTwoScore.')';
    }

}

