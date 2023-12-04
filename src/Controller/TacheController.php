<?php

// src/Controller/TacheController.php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class TacheController extends AbstractController
{
    public function index(): Response
    {
        return $this->render('tache/index.html.twig');
    }
}

