<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * User
 *
 * @ORM\Table(name="users")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\UserRepository")
 */
class User
{
    /**
     * @var int
     *
     * @ORM\Column(name="user_ID", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="email", type="string", length=255, unique=true)
     */
    private $email;

    /**
     * @var string
     *
     * @ORM\Column(name="login", type="string", length=255, unique=true)
     */
    private $login;

    /**
     * @var string
     *
     * @ORM\Column(name="password", type="string", length=255)
     */
    private $password;

    /**
     * @var bool
     *
     * @ORM\Column(name="active", type="boolean")
     */
    private $active;

    /**
     * @var bool
     *
     * @ORM\Column(name="enable", type="boolean")
     */
    private $enable;

    /**
     * @var string
     *
     * @ORM\Column(name="subscription_cost", type="decimal", precision=10, scale=2, nullable=true)
     */
    private $subscriptionCost;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="createdAt", type="datetime")
     */
    private $createdAt;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="UserBet", mappedBy="user")
     */
    private $usersBets;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="SinglePayBet", mappedBy="user")
     */
    private $paidBets;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="Payment", mappedBy="user")
     */
    private $payments;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="Subscription", mappedBy="user")
     */
    private $paidSubscriptions;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="Subscription", mappedBy="tipster")
     */
    private $soldSubscriptions;

    /**
     * @var ArrayCollection
     *
     * @ORM\OneToMany(targetEntity="SeenBet", mappedBy="user")
     */
    private $views;

    /**
     * User constructor.
     */
    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->enable = true;
        $this->active = false;
        $this->usersBets = new ArrayCollection();
        $this->paidBets = new ArrayCollection();
        $this->payments = new ArrayCollection();
        $this->paidSubscriptions = new ArrayCollection();
        $this->soldSubscriptions = new ArrayCollection();
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
     * Set email
     *
     * @param string $email
     *
     * @return User
     */
    public function setEmail($email)
    {
        $this->email = $email;

        return $this;
    }

    /**
     * Get email
     *
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set login
     *
     * @param string $login
     *
     * @return User
     */
    public function setLogin($login)
    {
        $this->login = $login;

        return $this;
    }

    /**
     * Get login
     *
     * @return string
     */
    public function getLogin()
    {
        return $this->login;
    }

    /**
     * Set password
     *
     * @param string $password
     *
     * @return User
     */
    public function setPassword($password)
    {
        $this->password = $password;

        return $this;
    }

    /**
     * Get password
     *
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Set active
     *
     * @param boolean $active
     *
     * @return User
     */
    public function setActive($active)
    {
        $this->active = $active;

        return $this;
    }

    /**
     * Get active
     *
     * @return bool
     */
    public function getActive()
    {
        return $this->active;
    }

    /**
     * Set enable
     *
     * @param boolean $enable
     *
     * @return User
     */
    public function setEnable($enable)
    {
        $this->enable = $enable;

        return $this;
    }

    /**
     * Get enable
     *
     * @return bool
     */
    public function getEnable()
    {
        return $this->enable;
    }

    /**
     * Set subscriptionCost
     *
     * @param string $subscriptionCost
     *
     * @return User
     */
    public function setSubscriptionCost($subscriptionCost)
    {
        $this->subscriptionCost = $subscriptionCost;

        return $this;
    }

    /**
     * Get subscriptionCost
     *
     * @return string
     */
    public function getSubscriptionCost()
    {
        return $this->subscriptionCost;
    }

    /**
     * Get createdAt
     *
     * @return \DateTime
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
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
        $usersBets->setUser($this);
    }

    /**
     * @param UserBet $usersBets
     */
    public function removeUsersBet(UserBet $usersBets){
        $this->usersBets->remove($usersBets);
        $usersBets->setUser(null);
    }

    /**
     * @return ArrayCollection
     */
    public function getPaidBets()
    {
        return $this->paidBets;
    }

    /**
     * @param ArrayCollection $paidBets
     */
    public function setPaidBets($paidBets)
    {
        $this->paidBets = $paidBets;
    }

    /**
     * @param SinglePayBet $paidBets
     */
    public function addPaidBet(SinglePayBet $paidBets){
        $this->paidBets->add($paidBets);
        $paidBets->setUser($this);
    }

    /**
     * @param SinglePayBet $paidBets
     */
    public function removePaidBet(SinglePayBet $paidBets){
        $this->paidBets->remove($paidBets);
        $paidBets->setUser(null);
    }

    /**
     * @return ArrayCollection
     */
    public function getPayments()
    {
        return $this->payments;
    }

    /**
     * @param ArrayCollection $payments
     */
    public function setPayments($payments)
    {
        $this->payments = $payments;
    }

    /**
     * @param Payment $payments
     */
    public function addPayment(Payment $payments){
        $this->payments->add($payments);
        $payments->setUser($this);
    }

    /**
     * @param Payment $payments
     */
    public function removePayment(Payment $payments){
        $this->payments->remove($payments);
        $payments->setUser(null);
    }

    /**
     * @return ArrayCollection
     */
    public function getPaidSubscriptions()
    {
        return $this->paidSubscriptions;
    }

    /**
     * @param ArrayCollection $paidSubscriptions
     */
    public function setPaidSubscriptions($paidSubscriptions)
    {
        $this->paidSubscriptions = $paidSubscriptions;
    }

    /**
     * @param Subscription $paidSubscriptions
     */
    public function addPaidSubscription(Subscription $paidSubscriptions){
        $this->paidSubscriptions->add($paidSubscriptions);
        $paidSubscriptions->setUser($this);
    }

    /**
     * @param Subscription $paidSubscriptions
     */
    public function removePaidSubscription(Subscription $paidSubscriptions){
        $this->paidSubscriptions->remove($paidSubscriptions);
        $paidSubscriptions->setUser(null);
    }

    /**
     * @return ArrayCollection
     */
    public function getSoldSubscriptions()
    {
        return $this->soldSubscriptions;
    }

    /**
     * @param ArrayCollection $soldSubscriptions
     */
    public function setSoldSubscriptions($soldSubscriptions)
    {
        $this->soldSubscriptions = $soldSubscriptions;
    }

    /**
     * @param Subscription $soldSubscriptions
     */
    public function addSoldSubscription(Subscription $soldSubscriptions){
        $this->soldSubscriptions->add($soldSubscriptions);
        $soldSubscriptions->setUser($this);
    }

    /**
     * @param Subscription $soldSubscriptions
     */
    public function removeSoldSubscription(Subscription $soldSubscriptions){
        $this->soldSubscriptions->remove($soldSubscriptions);
        $soldSubscriptions->setUser(null);
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
        $seenBet->setUser($this);
    }

    /**
     * @param SeenBet $seenBet
     */
    public function removeView(SeenBet $seenBet){
        $this->views->remove($seenBet);
        $seenBet->setUser(null);
    }
}

