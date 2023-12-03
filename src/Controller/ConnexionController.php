<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ConnexionController extends AbstractController
{
    /**
     * @Route("/connexion", name="connexion")
     */
    public function index(Request $request): Response
    {
        if ($request->isMethod('POST') && $request->request->get('register')) {
            $username = $request->request->get('username');
            $email = $request->request->get('email');
            $password = $request->request->get('password');
            $userType = $request->request->get('userType');

            // Handle registration logic
            // ...

            return $this->redirectToRoute('connexion');
        }

        if ($request->isMethod('POST') && $request->request->get('login')) {
            $enteredEmail = $request->request->get('email');
            $enteredPassword = $request->request->get('password');
            $enteredUserType = $request->request->get('loginUserType');

            // Handle login logic
            // ...

            return $this->redirectToRoute('connexion');
        }

        return $this->render('connexion/index.html.twig');
    }
}
