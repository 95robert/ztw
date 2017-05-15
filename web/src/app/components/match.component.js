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
 * Created by Aksel on 2017-05-08.
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
            console.log(_this.bets);
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
    return MatchComponent;
}());
MatchComponent = __decorate([
    core_1.Component({
        selector: 'games',
        // templateUrl: './assets/games.component.html',
        styleUrls: ['./assets/common.component.css'],
        styles: ["\n        .flex-container {justify-content: flex-start !important;}\n    "],
        template: "\n        <section>\n            <header i18n>Match overview</header>\n            <loader style=\"margin: auto\" *ngIf=\"isLoading\"></loader>\n            <alert-box alertType=\"warning\" [message]=\"warningMessage\" disableClose=\"true\" *ngIf=\"showWarning\"></alert-box>\n            <game [game]=\"game\" *ngIf=\"!isLoading\" disableButtons=\"true\"></game>\n            \n            <header i18n>Tips for this match</header>\n            <loader style=\"margin: auto\" *ngIf=\"isLoading2\"></loader>\n            <alert-box alertType=\"warning\" [message]=\"warningMessage2\" disableClose=\"true\" *ngIf=\"showWarning2\"></alert-box>\n\n            <div class=\"flex-container\">\n                <bet *ngFor=\"let bet of bets\" [bet]=\"bet\" class=\"flex-item\"></bet>\n            </div>\n        </section>\n    ",
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        game_service_1.GameService,
        bet_service_1.BetService])
], MatchComponent);
exports.MatchComponent = MatchComponent;
//# sourceMappingURL=match.component.js.map