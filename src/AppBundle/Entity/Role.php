<?php
namespace AppBundle\Entity;


use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\Role\RoleInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Role Entity
 *
 * @ORM\Table(name="roles")
 * @ORM\Entity()
 */
class Role implements RoleInterface
{

    public function __construct($name = '')
    {
        $this->role = $name;
        $this->users = new ArrayCollection();
    }

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="role", type="string", unique=true, length=70)
     * @Assert\NotNull(message="not_blank")
     */
    private $role;

    /**
     * @var string
     *
     * @ORM\Column(name="description", type="string", length=255, nullable=true)
     * @Assert\NotNull(message="not_blank")
     * @Assert\Length(
     *      min = 1,
     *      max = 50
     * )
     */
    private $description;

    /**
     * @var
     * @ORM\ManyToMany(targetEntity="User", mappedBy="roles")
     */
    private $users;

    /**
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }


    /**
     * @param string $role
     * @return role
     */
    public function setRole($role)
    {
        $this->role = $role;

        return $this;
    }

    /**
     * @return string
     */
    public function getRole()
    {
        return $this->role;
    }

    /**
     * Set description
     *
     * @param string $description
     * @return role
     */
    public function setDescription($description)
    {
        $this->description = $description;

        return $this;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Add users
     *
     * @param User $user
     * @return Role
     */
    public function addUser(User $user)
    {
        if (!$this->getUsers()->contains($user)) {
            $user->addRole($this);
            $this->getUsers()->add($user);
        }

        return $this;
    }

    public function removeUser(User $user)
    {
        if ($this->getUsers()->contains($user)) {
            $user->removeRole($this->role);
            $this->getUsers()->removeElement($user);
        }

        return $this;
    }

    /**
     * Get users
     *
     * @return Collection
     */
    public function getUsers()
    {
        return $this->users;
    }

}