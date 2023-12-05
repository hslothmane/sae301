<?php
// src/Controller/ConnexionController.php

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
    public function index(): Response
    {
        return $this->render('connexion/index.html.twig');
    }

    /**
     * @Route("/connexion-process-form", name="connexion_process_form", methods={"POST"})
     */
    public function processForm(Request $request): Response
    {
        $username = $request->request->get('username');
        $email = $request->request->get('email');
        $password = $request->request->get('password');
        $userType = $request->request->get('userType');

        if ($userType === 'professeur') {
            return $this->redirectToRoute('tache');
        } elseif ($userType === 'etudiant') {
            return $this->redirectToRoute('etudiant');
        }

        return $this->redirectToRoute('connexion');
    }
}
