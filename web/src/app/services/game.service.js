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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var game_1 = require("../models/game");
var league_1 = require("../models/league");
var team_1 = require("../models/team");
var GameService = (function () {
    // private url = 'api/game';  // URL to web api
    // private headers = new Headers({'Content-Type': 'application/json'});
    function GameService(http) {
        this.http = http;
    }
    GameService.prototype.getGames = function () {
        // return this.http.get(this.url)
        //     .toPromise()
        //     .then(response => {
        //         return response.json() as Game[];
        //     })
        //     .catch(this.handleError);
        return new Promise(function (resolve) {
            // We call resolve(...) when what we were doing async succeeded, and reject(...) when it failed.
            // In this example, we use setTimeout(...) to simulate async code.
            // In reality, you will probably be using something like XHR or an HTML5 API.
            setTimeout(function () {
                var l1 = new league_1.League(1, 'BBVA');
                var t1 = new team_1.Team(1, 'Barcelona');
                var t2 = new team_1.Team(1, 'Real Madryt');
                resolve([
                    new game_1.Game(1, new Date('2017-05-07'), 5, 6, l1, t1, t2),
                    new game_1.Game(2, new Date('2017-05-07'), 5, 6, l1, t1, t2),
                    new game_1.Game(3, new Date('2017-05-07'), 5, 6, l1, t1, t2),
                    new game_1.Game(4, new Date('2017-05-17'), 0, 2, l1, t1, t2)
                ]);
            }, 500);
        });
    };
    GameService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    GameService.prototype.getGame = function (id) {
        // return this.http.get(this.url)
        //     .toPromise()
        //     .then(response => {
        //         return response.json() as Game[];
        //     })
        //     .catch(this.handleError);
        return new Promise(function (resolve, reject) {
            // We call resolve(...) when what we were doing async succeeded, and reject(...) when it failed.
            // In this example, we use setTimeout(...) to simulate async code.
            // In reality, you will probably be using something like XHR or an HTML5 API.
            setTimeout(function () {
                var l1 = new league_1.League(1, 'BBVA');
                var t1 = new team_1.Team(1, 'Barca');
                var t2 = new team_1.Team(1, 'Real');
                var games = [
                    new game_1.Game(1, new Date('2017-05-07'), 5, 6, l1, t1, t2),
                    new game_1.Game(2, new Date('2017-05-07'), 5, 6, l1, t1, t2),
                    new game_1.Game(3, new Date('2017-05-07'), 5, 6, l1, t1, t2),
                    new game_1.Game(4, new Date('2017-05-17'), 0, 2, l1, t1, t2)
                ];
                for (var _i = 0, games_1 = games; _i < games_1.length; _i++) {
                    var game = games_1[_i];
                    if (game.id === id) {
                        resolve(game);
                    }
                }
                reject("Can not find match id = " + id);
            }, 500);
        });
    };
    return GameService;
}());
GameService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map