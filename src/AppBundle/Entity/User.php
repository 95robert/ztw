<?php

namespace AppBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use AppBundle\Entity\Role;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * User
 *
 * @ORM\Table(name="users")
 * @ORM\Entity(repositoryClass="AppBundle\Repository\UserRepository")
 */
class User implements UserInterface
{
    /**
     * @var int
     *
     * @ORM\Column(name="user_ID", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     * @Groups({"standard-bet-info", "tipster", "settings"})
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
     * @Groups({"standard-bet-info", "tipster"})
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
     * @Groups({"settings"})
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
     * Kolekcja ról danego użytkownika.
     *
     * @ORM\ManyToMany(targetEntity="Role", inversedBy="users")
     * @ORM\JoinTable(name="users_roles",
     *      joinColumns={@ORM\JoinColumn(name="user_id", referencedColumnName="user_ID", onDelete="cascade")},
     *      inverseJoinColumns={@ORM\JoinColumn(name="role_id", referencedColumnName="id", onDelete="cascade")}
     *  )
     */
    private $roles;

    /**
     * @var string
     *
     * @ORM\Column(name="image", type="string", length=255, nullable=true)
     * @Groups({"standard-bet-info", "tipster", "settings"})
     */
    private $image;

    /**
     * @var string
     *
     * @ORM\Column(name="about", type="string", length=1000, nullable=true)
     * @Groups({"standard-bet-info", "tipster", "settings"})
     */
    private $about;

    /**
     * User constructor.
     */
    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->enable = true;
//        $this->active = false;
        $this->active = true;
        $this->subscriptionCost = 100;
        $this->usersBets = new ArrayCollection();
        $this->paidBets = new ArrayCollection();
        $this->payments = new ArrayCollection();
        $this->paidSubscriptions = new ArrayCollection();
        $this->soldSubscriptions = new ArrayCollection();
        $this->views = new ArrayCollection();
        $this->roles = new ArrayCollection();
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

    /**
     * Returns the salt that was originally used to encode the password.
     *
     * This can return null if the password was not encoded using a salt.
     *
     * @return string|null The salt
     */
    public function getSalt()
    {
    }

    /**
     * Returns the username used to authenticate the user.
     *
     * @return string The username
     */
    public function getUsername()
    {
        return $this->login;
    }

    /**
     * Removes sensitive data from the user.
     *
     * This is important if, at any given point, sensitive information like
     * the plain-text password is stored on this object.
     */
    public function eraseCredentials()
    {
    }

    /* ROLES */
    public function getRoles()
    {
        $roleArray = $this->roles->toArray();
        $roles = array_merge($roleArray, array(new Role('ROLE_USER')));
        return array_map(function ($role) {
            return $role->getRole();
        }, $roles);
    }

    /**
     * Returns the true ArrayCollection of Roles.
     */
    public function getRolesCollection()
    {
        return $this->roles;
    }
    /**
     * Przekaż string, a otrzymasz wypragniony obiekt roli (albo nulla, lol).
     *
     * @param string $role
     * @return Role|null
     */
    public function getRole($role)
    {
        foreach ($this->getRolesCollection() as $roleItem) {
            if ($role === $roleItem->getRole()) {
                return $roleItem;
            }
        }
        return null;
    }

    /**
     * @param mixed $roles
     */
    public function setRoles($roles)
    {
        $this->roles = $roles;
    }

    /**
     * Pass a string, checks if we have that Role. Same functionality as getRole() except returns a real boolean.
     * @param string $role
     * @return boolean
     */
    public function hasRole($role)
    {
        if ($this->getRole($role)) {
            return true;
        }
        return false;
    }

    /**
     * Dodaje obiekt Role do kolekcji ArrayCollection ról.
     *
     * Nie możemy type hintować kolekcji w nagłówku (bo interfejs),
     * więć rzucamy wyjątkiem.
     *
     * @throws \Exception
     * @param Role $role
     * @return User
     */
    public function addRole($role)
    {

        if (!$role instanceof Role) {
            throw new \Exception("addRole przyjmuje obiekt Role jako parametr");
        }

        if (!$this->hasRole($role->getRole())) {
            $this->roles->add($role);
        }

        return $this;
    }

    /**
     * Pass a string, remove the Role object from collection.
     * @param string $role
     * @return User
     */
    public function removeRole( $role )
    {
        $roleElement = $this->getRole( $role );
        if ($roleElement) {
            $this->roles->removeElement( $roleElement );
        }

        return $this;
    }
    /* ROLES */

    public function getSoldSingleBets(){
        $soldSingleBets = [];
        foreach($this->getUsersBets() as $bet){
            foreach($bet->getSoldBets() as $soldBet){
                $soldSingleBets[] = $soldBet;
            }
        }
        return $soldSingleBets;
    }

    /**
     * @return string
     */
    public function getImage()
    {
        return $this->image ? $this->image : 'img/default_user.png';
    }

    /**
     * @param string $image
     */
    public function setImage($image)
    {
        $this->image = $image;
    }

    /**
     * @return string
     */
    public function getAbout()
    {
        return $this->about;
    }

    /**
     * @param string $about
     */
    public function setAbout($about)
    {
        $this->about = $about;
    }

    public function __toString(){
        return $this->login;
    }

}

