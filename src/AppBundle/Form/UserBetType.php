<?php

namespace AppBundle\Form;

use AppBundle\Entity\Game;
use AppBundle\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UserBetType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('game', EntityType::class, array(
                'class' => Game::class
            ))
            ->add('user', EntityType::class, array(
                'class' => User::class
            ))
            ->add('cost', NumberType::class)
            ->add('odds', NumberType::class)
            ->add('stake', NumberType::class)
            ->add('result', ChoiceType::class, array(
                'choices' => array(
                    'remis' => 0,
                    'wygrana gospodarza' => 1,
                    'wygrana gościa'  => 2,
                )
            ))
            ->add('status', ChoiceType::class, array(
                'choices' => array(
                    'przegrana' => -1,
                    'w trakcie' => 0,
                    'wygrana' => 1,
                )
            ))
        ;
    }
    
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\UserBet',
            'label' => false
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'appbundle_userbet';
    }


}
