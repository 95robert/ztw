<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * UserBet
 *
 * @ORM\Table(name="user_bets")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\UserBetRepository")
 */
class UserBet
{
    /**
     * @var int
     *
     * @ORM\Column(name="user_bet_ID", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @Groups({"standard-bet-info"})
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="cost", type="decimal", precision=10, scale=2, nullable=true)
     * @Groups({"standard-bet-info"})
     * @Assert\GreaterThanOrEqual(0)
     * @Assert\Type("numeric")
     *
     */
    private $cost;

    /**
     * @var float
     *
     * @ORM\Column(name="odds", type="float")
     * @Groups({"standard-bet-info"})
     * @Assert\GreaterThanOrEqual(0)
     * @Assert\Type("numeric")
     */
    private $odds;

    /**
     * @var int
     *
     * @ORM\Column(name="stake", type="integer")
     * @Groups({"standard-bet-info"})
     * @Assert\GreaterThanOrEqual(0)
     * @Assert\Type("numeric")
     */
    private $stake;

    /**
     * @var int
     *
     * @ORM\Column(name="result", type="integer", nullable=true)
     * @Groups({"result-bet-info"})
     * @Assert\LessThanOrEqual(1)
     * @Assert\GreaterThanOrEqual(-1)
     * @Assert\Type("numeric")
     */
    private $result;

    /**
     * @var int
     *
     * @ORM\Column(name="status", type="integer", nullable=true)
     * @Groups({"standard-bet-info"})
     */
    private $status;

    /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="usersBets")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="user_ID")
     * @Groups({"standard-bet-info"})
     * @Assert\NotNull()
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="Game", inversedBy="usersBets")
     * @ORM\JoinColumn(name="game_id", referencedColumnName="game_ID")
     * @Groups({"standard-bet-info"})
     * @Assert\NotNull()
     */
    private $game;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="SinglePayBet", mappedBy="userBet")
     */
    private $soldBets;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="SeenBet", mappedBy="userBet")
     */
    private $views;

    /**
     * UserBet constructor.
     */
    public function __construct()
    {
        $this->status = 0;
        $this->soldBets = new ArrayCollection();
        $this->views = new ArrayCollection();
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
     * Set cost
     *
     * @param string $cost
     *
     * @return UserBet
     */
    public function setCost($cost)
    {
        $this->cost = $cost;

        return $this;
    }

    /**
     * Get cost
     *
     * @return string
     */
    public function getCost()
    {
        return $this->cost;
    }

    /**
     * Set odds
     *
     * @param float $odds
     *
     * @return UserBet
     */
    public function setOdds($odds)
    {
        $this->odds = $odds;

        return $this;
    }

    /**
     * Get odds
     *
     * @return float
     */
    public function getOdds()
    {
        return $this->odds;
    }

    /**
     * Set stake
     *
     * @param integer $stake
     *
     * @return UserBet
     */
    public function setStake($stake)
    {
        $this->stake = $stake;

        return $this;
    }

    /**
     * Get stake
     *
     * @return int
     */
    public function getStake()
    {
        return $this->stake;
    }

    /**
     * Set result
     *
     * @param integer $result
     *
     * @return UserBet
     */
    public function setResult($result)
    {
        $this->result = $result;

        return $this;
    }

    /**
     * Get result
     *
     * @return int
     */
    public function getResult()
    {
        return $this->result;
    }

    /**
     * Set status
     *
     * @param integer $status
     *
     * @return UserBet
     */
    public function setStatus($status)
    {
        $this->status = $status;

        return $this;
    }

    /**
     * Get status
     *
     * @return int
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * @return User
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param User $user
     */
    public function setUser(User $user)
    {
        $this->user = $user;
    }

    /**
     * @return Game
     */
    public function getGame()
    {
        return $this->game;
    }

    /**
     * @param Game $game
     */
    public function setGame($game)
    {
        $this->game = $game;
    }

    /**
     * @return mixed
     */
    public function getSoldBets()
    {
        return $this->soldBets;
    }

    /**
     * @param mixed $soldBets
     */
    public function setSoldBets($soldBets)
    {
        $this->soldBets = $soldBets;
    }

    /**
     * @param SinglePayBet $singlePayBet
     */
    public function addSoldBet(SinglePayBet $singlePayBet){
        $this->soldBets->add($singlePayBet);
        $singlePayBet->setUserBet($this);
    }

    /**
     * @param SinglePayBet $singlePayBet
     */
    public function removeSoldBet(SinglePayBet $singlePayBet){
        $this->soldBets->remove($singlePayBet);
        $singlePayBet->setUserBet(null);
    }

    /**
     * @return ArrayCollection
     */
    public function getViews()
    {
        return $this->views;
    }

    /**
     * @param ArrayCollection $views
     */
    public function setViews($views)
    {
        $this->views = $views;
    }

    /**
     * @param SeenBet $seenBet
     */
    public function addView(SeenBet $seenBet){
        $this->views->add($seenBet);
        $seenBet->setUserBet($this);
    }

    /**
     * @param SeenBet $seenBet
     */
    public function removeView(SeenBet $seenBet){
        $this->views->remove($seenBet);
        $seenBet->setUserBet(null);
    }
}

