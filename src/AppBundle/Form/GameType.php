<?php

namespace AppBundle\Form;

use AppBundle\Entity\League;
use AppBundle\Entity\Team;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class GameType extends AbstractType
{
    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('date', DateTimeType::class)
            ->add('teamOneScore', NumberType::class)
            ->add('teamTwoScore', NumberType::class)
            ->add('league', EntityType::class, array(
                'class' => League::class
            ))
            ->add('teamOne', EntityType::class, array(
                'class' => Team::class
            ))
            ->add('teamTwo', EntityType::class, array(
                'class' => Team::class
            ))
        ;
    }
    
    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\Game',
            'label' => false
        ));
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix()
    {
        return 'appbundle_game';
    }


}
