<?php

namespace AppBundle\Command;

use AppBundle\Entity\Game;
use AppBundle\Entity\League;
use AppBundle\Entity\Team;
use AppBundle\Repository\Creator\GameCreator;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class BettingerDownloadMatchesCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('bettinger:download:matches')
            ->setDescription('Komenda, która pobiera mecze i ładuje do bazy');
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln("========= Zaczynam dodawanie nowych meczy... ========");
        $newGames = array(
            array(
                "team_one" => "Legia Warszawa",
                "team_two" => 'Lech Poznań',
                "league" => "Ekstraklasa",
                "date" => "06-05-2017",
                "time" => "20:00",
            ),
            array(
                "team_one" => "Lech Poznań",
                "team_two" => 'Śląsk Wrocław',
                "league" => "Ekstraklasa",
                "date" => "07-05-2017",
                "time" => "22:20",
            ),
            array(
                "team_one" => "Arsenal Londyn",
                "team_two" => 'Chelsea Londyn',
                "league" => "Premier League",
                "date" => "08-05-2017",
                "time" => "18:15",
            ),
            array(
                "team_one" => "Owardia Opole",
                "team_two" => 'Legia Warszawa',
                "league" => "Ekstraklasa",
                "date" => "10-05-2017",
                "time" => "15:30",
            ),
            array(
                "team_one" => "Everton",
                "team_two" => 'Chelsea Londyn',
                "league" => "Premier League",
                "date" => "10-05-2017",
                "time" => "12:00",
            ),
        );

        $em = $this->getContainer()->get('doctrine')->getManager();
        $addedGame = (new GameCreator($em))->createFromArray($newGames);
        $output->writeln("========= Dodano ".count($newGames)." meczy. ========");
    }
}
