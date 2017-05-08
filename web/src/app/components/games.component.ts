/**
 * Created by akselon on 2017-04-24.
 */
import {Component, OnInit} from '@angular/core';
import {Game} from '../models/game';
import {GameService} from '../services/game.service';

@Component({
    selector: 'games',
    // templateUrl: './assets/games.component.html',
    styleUrls: [ './assets/common.component.css'],
    template: `
        <section>
            <header>Nadchodzące mecze</header>
            <loader style="margin: auto" *ngIf="isLoading"></loader>
            <div class="flex-container">
                <game *ngFor="let game of games" [game]="game" class="flex-item"></game>
            </div>
        </section>
    `,
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
