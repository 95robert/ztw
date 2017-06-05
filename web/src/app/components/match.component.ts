/**
 * Created by akselon on 2017-05-08.
 */
import {Component, OnDestroy, OnInit} from '@angular/core';
import {Game} from '../models/game';
import {GameService} from '../services/game.service';
import {ActivatedRoute} from '@angular/router';
import {BetService} from '../services/bet.service';
import {Bet} from '../models/bet';

@Component({
    selector: 'games',
    templateUrl: './assets/match.component.html',
    styleUrls: [ './assets/match.component.css', './assets/common.css'],
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
        this.isLoading3 = true;
        const betToSend = (this.usersBet === newBet) ? -1 : newBet;
        this.betService.sendUsersBet(100, 100, 100, betToSend, this.id)
            .then(() => {
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

