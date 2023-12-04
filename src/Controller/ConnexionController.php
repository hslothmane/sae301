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

        // Effectuez le traitement nécessaire avec les données

        // Redirigez l'utilisateur vers la page appropriée (à adapter selon votre logique)
        if ($userType === 'professeur') {
            return $this->redirectToRoute('tache');
        } elseif ($userType === 'etudiant') {
            return $this->redirectToRoute('etudiant');
        }

        // Par défaut, redirigez vers la page d'accueil
        return $this->redirectToRoute('home');
    }
}
