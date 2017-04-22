<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/{path}", name="homepage", requirements={"path" = ".*"})
     */
    public function indexAction(Request $request, $path)
    {
        return $this->render('index.html.twig');
    }
}
