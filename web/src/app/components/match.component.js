"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by akselon on 2017-05-08.
 */
var core_1 = require("@angular/core");
var game_service_1 = require("../services/game.service");
var router_1 = require("@angular/router");
var bet_service_1 = require("../services/bet.service");
var MatchComponent = (function () {
    function MatchComponent(route, gameService, betService) {
        this.route = route;
        this.gameService = gameService;
        this.betService = betService;
        this.isLoading = true;
        this.isLoading2 = false;
        this.showWarning = false;
        this.warningMessage = '';
        this.bets = [];
        this.showWarning2 = false;
        this.warningMessage2 = '';
        this.usersBet = -1;
        this.isLoading3 = false;
        this.showWarning3 = false;
        this.warningMessage3 = '';
    }
    MatchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.gameService.getGame(_this.id)
                .then(function (game) {
                _this.game = game;
                _this.isLoading = false;
                _this.loadBetsForGame();
            })
                .catch(function (message) {
                _this.warningMessage = message;
                _this.showWarning = true;
                _this.isLoading = false;
            });
        });
    };
    MatchComponent.prototype.loadBetsForGame = function () {
        var _this = this;
        this.isLoading2 = true;
        this.betService.getBetsForGame(this.id)
            .then(function (bets) {
            _this.bets = bets;
            _this.isLoading2 = false;
        })
            .catch(function (message) {
            _this.warningMessage2 = message;
            _this.showWarning2 = true;
            _this.isLoading2 = false;
        });
    };
    MatchComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MatchComponent.prototype.usersBetChange = function (newBet) {
        var _this = this;
        this.isLoading3 = true;
        var betToSend = (this.usersBet === newBet) ? -1 : newBet;
        this.betService.sendUsersBet(100, 100, 100, betToSend, this.id)
            .then(function (res) {
            _this.isLoading3 = false;
            _this.usersBet = betToSend;
            _this.loadBetsForGame();
        })
            .catch(function (message) {
            _this.warningMessage3 = message;
            _this.showWarning3 = true;
            _this.isLoading3 = false;
        });
    };
    return MatchComponent;
}());
MatchComponent = __decorate([
    core_1.Component({
        selector: 'games',
        templateUrl: './assets/match.component.html',
        styleUrls: ['./assets/match.component.css', './assets/common.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        game_service_1.GameService,
        bet_service_1.BetService])
], MatchComponent);
exports.MatchComponent = MatchComponent;
//# sourceMappingURL=match.component.js.map