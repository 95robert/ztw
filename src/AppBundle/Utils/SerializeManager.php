<?php
/**
 * Created by PhpStorm.
 * User: Robert Przybylski
 * Date: 2017-04-02
 * Time: 19:31
 */

namespace AppBundle\Utils;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;

class SerializeManager
{
    public $container;

    /**
     * SerializeManager constructor.
     * @param $container
     */
    public function __construct($container)
    {
        $this->container = $container;
    }

    public function serializeObject($object, $groups = null, $ignoreAttributes = []){
        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));
        $encoders = array(new XmlEncoder(), new JsonEncoder());
        $normalizer = new ObjectNormalizer($classMetadataFactory);
        $normalizer->setCircularReferenceHandler(function ($object) {
            return $object->getId();
        });
        $callback = function ($dateTime) {
            return $dateTime instanceof \DateTime
                ? $dateTime->format('d-m-Y H:i')
                : '';
        };
        $normalizer->setCallbacks(array('date' => $callback));
        $normalizer->setIgnoredAttributes($ignoreAttributes);
        $normalizers = array($normalizer);
        $serializer = new Serializer($normalizers, $encoders);

        $objectSerialized = $serializer->normalize($object, null, array('groups' => $groups));

        return $objectSerialized;
    }

    public function serializeObjectToResponse($object, $groups = null, $additionalDates = [], $ignoreAttributes = []){
        $response = new JsonResponse();
        $objectSerialized = $this->serializeObject($object, $groups, $ignoreAttributes);

        if($objectSerialized == null) $objectSerialized = array();

        $response->setData(array_merge(
            $objectSerialized,
            $additionalDates
        ));

        return $response;
    }

    public function serializeArrayOfObject($arr, $groups = null, $ignoreAttributes = []){
        $response = array();
        foreach ($arr as $obj){
            $response[] = $this->serializeObject($obj, $groups, $ignoreAttributes);
        }
        return $response;
    }

    public function arrayToJsonResponse($array){
        $response = new JsonResponse();
        $response->setData($array);
        return $response;
    }

    public function arrayOfObjectsWithExtraFields($array, $repo, $groups = []){
        $elems = array();
        foreach($array as $elem){
            $object = $repo->findOneById($elem['id']);
            unset($elem['id']);
            $serializedObject = $this->serializeObject($object, $groups, array());
            $elems[] = array_merge($serializedObject, $elem);
        }

        return $this->arrayToJsonResponse($elems);
    }
}