<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * Subscription
 *
 * @ORM\Table(name="subscription")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\SubscriptionRepository")
 */
class Subscription
{
    /**
     * @var int
     *
     * @ORM\Column(name="subscription_ID", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="start_date", type="datetime")
     */
    private $startDate;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="end_date", type="datetime")
     */
    private $endDate;

    /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="paidSubscriptions")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="user_ID")
     */
    private $user;

    /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="soldSubscriptions")
     * @ORM\JoinColumn(name="tipster_id", referencedColumnName="user_ID")
     */
    private $tipster;

    /**
     * @ORM\OneToOne(targetEntity="Payment", inversedBy="subscription")
     * @ORM\JoinColumn(name="payment_id", referencedColumnName="payment_ID")
     */
    private $payment;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="SeenBet", mappedBy="subscription")
     */
    private $seenBets;

    /**
     * Subscription constructor.
     */
    public function __construct()
    {
        $this->seenBets = new ArrayCollection();
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
     * Set startDate
     *
     * @param \DateTime $startDate
     *
     * @return Subscription
     */
    public function setStartDate($startDate)
    {
        $this->startDate = $startDate;

        return $this;
    }

    /**
     * Get startDate
     *
     * @return \DateTime
     */
    public function getStartDate()
    {
        return $this->startDate;
    }

    /**
     * Set endDate
     *
     * @param \DateTime $endDate
     *
     * @return Subscription
     */
    public function setEndDate($endDate)
    {
        $this->endDate = $endDate;

        return $this;
    }

    /**
     * Get endDate
     *
     * @return \DateTime
     */
    public function getEndDate()
    {
        return $this->endDate;
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
     * @return User
     */
    public function getTipster()
    {
        return $this->tipster;
    }

    /**
     * @param User $tipster
     */
    public function setTipster(User $tipster)
    {
        $this->tipster = $tipster;
    }

    /**
     * @return Payment
     */
    public function getPayment()
    {
        return $this->payment;
    }

    /**
     * @param Payment $payment
     */
    public function setPayment(Payment $payment)
    {
        $this->payment = $payment;
    }

    /**
     * @return ArrayCollection
     */
    public function getSeenBets()
    {
        return $this->seenBets;
    }

    /**
     * @param ArrayCollection $seenBets
     */
    public function setSeenBets($seenBets)
    {
        $this->seenBets = $seenBets;
    }


    /**
     * @param SeenBet $seenBet
     */
    public function addSeenBets(SeenBet $seenBet){
        $this->seenBets->add($seenBet);
        $seenBet->setSubscription($this);
    }

    /**
     * @param SeenBet $seenBet
     */
    public function removeSeenBets(SeenBet $seenBet){
        $this->seenBets->remove($seenBet);
        $seenBet->setSubscription(null);
    }
}

