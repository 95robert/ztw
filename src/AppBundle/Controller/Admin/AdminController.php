<?php

namespace AppBundle\Controller\Api;

use AppBundle\Entity\Game;
use AppBundle\Entity\League;
use AppBundle\Entity\Role;
use AppBundle\Entity\Team;
use AppBundle\Entity\UserBet;
use AppBundle\Form\GameType;
use AppBundle\Form\LeagueType;
use AppBundle\Form\TeamType;
use AppBundle\Form\UserBetType;
use AppBundle\Form\UserType;
use DateTime;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\User;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Component\Security\Http\Event\InteractiveLoginEvent;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;

/**
 *
 * @Route("/admin")
 * @Security("has_role('ROLE_ADMIN')")
 */
class AdminController extends Controller
{
    /**
     * @Route("/", name="users_list")
     */
    public function usersAction(Request $request)
    {
        $users = $this->getDoctrine()->getRepository(User::class)->findAll();
        return $this->render('admin/users.html.twig', array(
            'users' => $users,
        ));
    }

    /**
     * @Route("/edit/user/{id}", name="edit_user")
     */
    public function editUserAction(Request $request, User $user)
    {
        $form = $this->createForm(UserType::class, $user);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $user = $form->getData();
            $this->getDoctrine()->getEntityManager()->flush();
            $this->setSuccessFlash();
            return $this->redirectToRoute('users_list');
        }
        return $this->render('admin/edit_user.html.twig', array(
            'form' => $form->createView(),
        ));
    }

    /**
     * @Route("/games", name="games_list")
     */
    public function gamesAction(Request $request)
    {
        $games = $this->getDoctrine()->getRepository(Game::class)->findAll();
        return $this->render('admin/games.html.twig', array(
            'games' => $games,
            'activeOnly' => $request->get('activeOnly'),
        ));
    }

    /**
     * @Route("/edit/game/{id}", name="edit_game")
     */
    public function editGameAction(Request $request, Game $game)
    {
        $form = $this->createForm(GameType::class, $game);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $game = $form->getData();
            $this->getDoctrine()->getEntityManager()->flush();
            $this->setSuccessFlash();
            $this->setResultsOfBets($game);
            return $this->redirectToRoute('games_list');
        }
        return $this->render('admin/edit_game.html.twig', array(
            'form' => $form->createView(),
        ));
    }

    /**
     * @Route("/add/game", name="add_game")
     */
    public function addGameAction(Request $request)
    {
        $form = $this->createForm(GameType::class, null);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $game = $form->getData();
            $this->getDoctrine()->getEntityManager()->persist($game);
            $this->getDoctrine()->getEntityManager()->flush();
            $this->setSuccessFlash();
            return $this->redirectToRoute('games_list');
        }
        return $this->render('admin/edit_game.html.twig', array(
            'form' => $form->createView(),
        ));
    }

    /**
     * @Route("/bets", name="bets_list")
     */
    public function betsAction(Request $request)
    {
        $bets = $this->getDoctrine()->getRepository(UserBet::class)->findAll();
        return $this->render('admin/bets.html.twig', array(
            'bets' => $bets,
            'activeOnly' => $request->get('activeOnly'),
        ));
    }

    /**
     * @Route("/edit/bet/{id}", name="edit_bet")
     */
    public function editBetAction(Request $request, UserBet $bet)
    {
        $form = $this->createForm(UserBetType::class, $bet);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $bet = $form->getData();
            $this->getDoctrine()->getEntityManager()->flush();
            $this->setSuccessFlash();
            return $this->redirectToRoute('bets_list');
        }
        return $this->render('admin/edit_bet.html.twig', array(
            'form' => $form->createView(),
        ));
    }

    /**
     * @Route("/teams", name="teams_list")
     */
    public function teamsAction(Request $request)
    {
        $teams = $this->getDoctrine()->getRepository(Team::class)->findAll();
        return $this->render('admin/teams.html.twig', array(
            'teams' => $teams,
        ));
    }

    /**
     * @Route("/edit/team/{id}", name="edit_team")
     */
    public function editTeamAction(Request $request, Team $team)
    {
        $form = $this->createForm(TeamType::class, $team);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $this->saveLogo($form->get('logo')->getData(), $form->getData());
            $this->getDoctrine()->getEntityManager()->flush();
            $this->setSuccessFlash();
            return $this->redirectToRoute('teams_list');
        }
        return $this->render('admin/edit_team.html.twig', array(
            'form' => $form->createView(),
        ));
    }

    /**
     * @Route("/add/team/", name="add_team")
     */
    public function addTeamAction(Request $request)
    {
        $form = $this->createForm(TeamType::class, null);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $team = $this->saveLogo($form->get('logo')->getData(), $form->getData());
            $this->getDoctrine()->getEntityManager()->persist($team);
            $this->getDoctrine()->getEntityManager()->flush();
            $this->setSuccessFlash();
            return $this->redirectToRoute('teams_list');
        }
        return $this->render('admin/edit_team.html.twig', array(
            'form' => $form->createView(),
        ));
    }

    /**
     * @Route("/leagues", name="leagues_list")
     */
    public function leaguesAction(Request $request)
    {
        $leagues = $this->getDoctrine()->getRepository(League::class)->findAll();
        return $this->render('admin/leagues.html.twig', array(
            'leagues' => $leagues,
        ));
    }

    /**
     * @Route("/edit/league/{id}", name="edit_league")
     */
    public function editLeaguesAction(Request $request, League $league)
    {
        $form = $this->createForm(LeagueType::class, $league);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $this->getDoctrine()->getEntityManager()->flush();
            $this->setSuccessFlash();
            return $this->redirectToRoute('leagues_list');
        }
        return $this->render('admin/edit_league.html.twig', array(
            'form' => $form->createView(),
        ));
    }

    /**
     * @Route("/add/league/", name="add_league")
     */
    public function addLeagueAction(Request $request)
    {
        $form = $this->createForm(LeagueType::class, null);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $league = $form->getData();
            $this->getDoctrine()->getEntityManager()->persist($league);
            $this->getDoctrine()->getEntityManager()->flush();
            $this->setSuccessFlash();
            return $this->redirectToRoute('leagues_list');
        }
        return $this->render('admin/edit_league.html.twig', array(
            'form' => $form->createView(),
        ));
    }

    /**
     * @Route("/logout", name="admin_logout")
     * @Method({"GET"})
     */
    public function logoutAction(Request $request)
    {
        $this->get('security.token_storage')->setToken(null);
        $request->getSession()->invalidate();
        return $this->redirectToRoute('homepage', array('path' => ""));
    }

    public function setSuccessFlash()
    {
        $this->get('session')->getFlashBag()->add(
            'notice',
            array(
                'alert' => 'success',
                'title' => 'Sukces!',
                'message' => 'Zmiany zostały zapisane.'
            )
        );
    }

    public function setResultsOfBets(Game $game){
        if($game->getTeamOneScore() != null && $game->getTeamTwoScore() != null){
            $scoreOne = $game->getTeamOneScore();
            $scoreTwo = $game->getTeamTwoScore();
            $bets = $game->getUsersBets();
            foreach($bets as $bet){
                if($scoreOne == $scoreTwo){
                    if($bet->getResult() == 0) $bet->setStatus(1);
                    else $bet->setStatus(-1);
                }else if($scoreOne > $scoreTwo){
                    if($bet->getResult() == 1) $bet->setStatus(1);
                    else $bet->setStatus(-1);
                }else{
                    if($bet->getResult() == 2) $bet->setStatus(1);
                    else $bet->setStatus(-1);
                }
            }
        }else{
            $bets = $game->getUsersBets();
            foreach($bets as $bet){
                $bet->setStatus(0);
            }
        }
        $this->getDoctrine()->getEntityManager()->flush();
    }

    public function saveLogo($file, $team){
        if($file){
            $fileName = md5(uniqid()).'.'.$file->guessExtension();
            $file->move(
                $this->getParameter('logos_directory'),
                $fileName
            );
            $team->setLogo($fileName);
        }
        $this->getDoctrine()->getEntityManager()->flush();
        return $team;
    }
}
