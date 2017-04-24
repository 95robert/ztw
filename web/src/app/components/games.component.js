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
 * Created by akselon on 2017-04-24.
 */
var core_1 = require("@angular/core");
var game_service_1 = require("../services/game.service");
var GamesComponent = (function () {
    function GamesComponent(gameService) {
        this.gameService = gameService;
        this.games = [];
        this.isLoading = true;
    }
    GamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gameService.getGames()
            .then(function (games) {
            _this.games = games;
            _this.isLoading = false;
        });
    };
    return GamesComponent;
}());
GamesComponent = __decorate([
    core_1.Component({
        selector: 'games',
        // templateUrl: './assets/games.component.html',
        // styleUrls: [ './assets/dashgamesboard.component.css' ]
        template: "\n        <md-card>\n            <md-list>\n                <h3 md-subheader>Nadchodz\u0105ce mecze</h3>\n                <loader style=\"padding: 0 16px;\" *ngIf=\"isLoading\"></loader>\n                <md-list-item *ngFor=\"let game of games\">\n                    <md-icon md-list-icon>star</md-icon>\n                    <h4 md-line>{{game.teamOne.name}} vs {{game.teamTwo.name}}</h4>\n                    <p md-line> {{game.league.name}}, {{game.date | date}} </p>\n                </md-list-item>\n            </md-list>\n        </md-card>\n    ",
    }),
    __metadata("design:paramtypes", [game_service_1.GameService])
], GamesComponent);
exports.GamesComponent = GamesComponent;
//# sourceMappingURL=games.component.js.map