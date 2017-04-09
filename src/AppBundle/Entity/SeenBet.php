<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * SeenBet
 *
 * @ORM\Table(name="seen_bets")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\SeenBetRepository")
 */
class SeenBet
{
    /**
     * @var int
     *
     * @ORM\Column(name="seen_bet_ID", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="date", type="datetime")
     */
    private $date;

    /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="views")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="user_ID")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="UserBet", inversedBy="views")
     * @ORM\JoinColumn(name="user_bet_id", referencedColumnName="user_bet_ID")
     */
    private $userBet;

    /**
     * @ORM\ManyToOne(targetEntity="Subscription", inversedBy="views")
     * @ORM\JoinColumn(name="subscription_id", referencedColumnName="subscription_ID", nullable=true)
     */
    private $subscription;

    /**
     * SeenBet constructor.
     */
    public function __construct()
    {
        $this->date = new \DateTime();
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
     * @return SeenBet
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
     * @return UserBet
     */
    public function getUserBet()
    {
        return $this->userBet;
    }

    /**
     * @param UserBet $userBet
     */
    public function setUserBet(UserBet $userBet)
    {
        $this->userBet = $userBet;
    }

    /**
     * @return Subscription
     */
    public function getSubscription()
    {
        return $this->subscription;
    }

    /**
     * @param Subscription $subscription
     */
    public function setSubscription(Subscription $subscription = null)
    {
        $this->subscription = $subscription;
    }
}

