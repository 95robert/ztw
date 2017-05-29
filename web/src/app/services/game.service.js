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
var GameService = (function () {
    // private headers = new Headers({'Content-Type': 'application/json'});
    function GameService(http) {
        this.http = http;
        this.url = 'api/game'; // URL to web api
    }
    GameService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    GameService.prototype.getGames = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    GameService.prototype.getGame = function (id) {
        return this.http.get(this.url + '/' + id)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    return GameService;
}());
GameService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GameService);
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map