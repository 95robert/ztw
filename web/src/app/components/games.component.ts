/**
 * Created by akselon on 2017-04-24.
 */
import {Component, OnInit} from '@angular/core';
import {Game} from '../models/game';
import {GameService} from '../services/game.service';

@Component({
    selector: 'games',
    templateUrl: './assets/games.component.html',
    styleUrls: [ './assets/common.css']
})
export class GamesComponent implements OnInit {
    games: Game[] = [];
    isLoading = true;
    constructor(private gameService: GameService) { }

    ngOnInit(): void {
        this.gameService.getGames()
            .then(games => {
                this.games = games;
                this.isLoading = false;
            });
    }
}
