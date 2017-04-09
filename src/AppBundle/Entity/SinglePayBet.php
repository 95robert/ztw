<?php

namespace AppBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * SinglePayBet
 *
 * @ORM\Table(name="single_pay_bet")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\SinglePayBetRepository")
 */
class SinglePayBet
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="User", inversedBy="paidBets")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="user_ID")
     */
    private $user;

    /**
     * @ORM\OneToOne(targetEntity="Payment", inversedBy="singlePayBet")
     * @ORM\JoinColumn(name="payment_id", referencedColumnName="payment_ID")
     */
    private $payment;

    /**
     * @ORM\ManyToOne(targetEntity="UserBet", inversedBy="soldBets")
     * @ORM\JoinColumn(name="bet_id", referencedColumnName="user_bet_ID")
     */
    private $userBet;

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
     * @return mixed
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param mixed $user
     */
    public function setUser($user)
    {
        $this->user = $user;
    }

    /**
     * @return mixed
     */
    public function getPayment()
    {
        return $this->payment;
    }

    /**
     * @param mixed $payment
     */
    public function setPayment($payment)
    {
        $this->payment = $payment;
    }

    /**
     * @return mixed
     */
    public function getUserBet()
    {
        return $this->userBet;
    }

    /**
     * @param mixed $userBet
     */
    public function setUserBet($userBet)
    {
        $this->userBet = $userBet;
    }
}

