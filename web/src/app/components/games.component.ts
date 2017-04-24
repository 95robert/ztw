/**
 * Created by akselon on 2017-04-24.
 */
import {Component, OnInit} from '@angular/core';
import {Game} from "../models/game";
import {GameService} from "../services/game.service";

@Component({
    selector: 'games',
    // templateUrl: './assets/games.component.html',
    // styleUrls: [ './assets/dashgamesboard.component.css' ]
    template: `
        <md-card>
            <md-list>
                <h3 md-subheader>Nadchodzące mecze</h3>
                <loader style="padding: 0 16px;" *ngIf="isLoading"></loader>
                <md-list-item *ngFor="let game of games">
                    <md-icon md-list-icon>star</md-icon>
                    <h4 md-line>{{game.teamOne.name}} vs {{game.teamTwo.name}}</h4>
                    <p md-line> {{game.league.name}}, {{game.date | date}} </p>
                </md-list-item>
            </md-list>
        </md-card>
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

