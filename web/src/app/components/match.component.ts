/**
 * Created by Aksel on 2017-05-08.
 */
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Game} from '../models/game';
import {GameService} from '../services/game.service';
import {ActivatedRoute} from '@angular/router';
import {BetService} from '../services/bet.service';
import {Bet} from '../models/bet';

@Component({
    selector: 'games',
    // templateUrl: './assets/games.component.html',
    styleUrls: [ './assets/common.component.css'],
    styles: [`
        .flex-container {justify-content: flex-start !important;}
    `],
    template: `
        <section>
            <header>Podgląd meczu</header>
            <loader style="margin: auto" *ngIf="isLoading"></loader>
            <alert-box alertType="warning" [message]="warningMessage" disableClose="true" *ngIf="showWarning"></alert-box>
            <game [game]="game" *ngIf="!isLoading" disableButtons="true"></game>
            
            <header>Typy dla tego meczu</header>
            <loader style="margin: auto" *ngIf="isLoading2"></loader>
            <alert-box alertType="warning" [message]="warningMessage2" disableClose="true" *ngIf="showWarning2"></alert-box>

            <div class="flex-container">
                <bet *ngFor="let bet of bets" [bet]="bet" class="flex-item"></bet>
            </div>
        </section>
    `,
})
export class MatchComponent implements OnInit, OnDestroy {
    id: number;
    private sub: any;
    game: Game;
    isLoading = true;
    isLoading2 = false;
    showWarning = false;
    warningMessage = '';
    bets: Bet[] = [];
    showWarning2 = false;
    warningMessage2 = '';

    constructor(
        private route: ActivatedRoute,
        private gameService: GameService,
        private betService: BetService) { }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.gameService.getGame(this.id)
                .then(game => {
                    this.game = game;
                    this.isLoading = false;
                    this.loadBetsForGame();
                })
                .catch(message => {
                    this.warningMessage = message;
                    this.showWarning = true;
                    this.isLoading = false;
                });
        });
    }

    private loadBetsForGame() {
        this.isLoading2 = true;
        this.betService.getBetsForGame(this.id)
            .then(bets => {
                this.bets = bets;
                this.isLoading2 = false;
                console.log(this.bets);
            })
            .catch(message => {
                this.warningMessage2 = message;
                this.showWarning2 = true;
                this.isLoading2 = false;
            });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }
}

