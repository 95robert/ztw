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
        .buttonactive {background: #ffc300;}
    `],
    template: `
        <section>
            <header i18n>Match overview</header>
            <loader style="margin: auto" *ngIf="isLoading"></loader>
            <alert-box alertType="warning" [message]="warningMessage" disableClose="true" *ngIf="showWarning"></alert-box>
            <game [game]="game" *ngIf="!isLoading" disableButtons="true"></game>
            
            <header i18n>Tips for this match</header>
            <md-card *ngIf="!isLoading">
                <md-card-title i18n>Your tip</md-card-title>
                <loader style="margin: auto" *ngIf="isLoading3"></loader>
                <alert-box alertType="warning" [message]="warningMessage3" disableClose="true" *ngIf="showWarning3"></alert-box>
                <button md-raised-button (click)="usersBetChange(1)" [class.buttonactive]="usersBet === 1">{{game.teamOne.name}}</button>
                <button md-raised-button (click)="usersBetChange(0)" [class.buttonactive]="usersBet === 0" i18n>Draw</button>
                <button md-raised-button (click)="usersBetChange(2)" [class.buttonactive]="usersBet === 2">{{game.teamTwo.name}}</button>
            </md-card>
            <loader style="margin: auto" *ngIf="isLoading2"></loader>
            <alert-box alertType="warning" [message]="warningMessage2" disableClose="true" *ngIf="showWarning2"></alert-box>
            <alert-box alertType="info" [message]="'No types for this match yet'" disableClose="true"
                       *ngIf="!isLoading2 && !bets.length && !isLoading"></alert-box>
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
    usersBet = -1;
    isLoading3 = false;
    showWarning3 = false;
    warningMessage3 = '';

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

    public usersBetChange(newBet: number) {
        console.log('Sending bet');
        this.isLoading3 = true;
        const betToSend = (this.usersBet === newBet) ? -1 : newBet;
        this.betService.sendUsersBet(100, 100, 100, betToSend, this.id)
            .then(res => {
                this.isLoading3 = false;
                this.usersBet = betToSend;
                this.loadBetsForGame();
            })
            .catch(message => {
                this.warningMessage3 = message;
                this.showWarning3 = true;
                this.isLoading3 = false;
            });
    }
}

