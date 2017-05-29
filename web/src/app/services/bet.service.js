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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var BetService = (function () {
    function BetService(http) {
        this.http = http;
        this.url = 'api/bet/'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    BetService.prototype.getBetsForGame = function (id) {
        return this.http.get(this.url + 'filter?game=' + id)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    BetService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    BetService.prototype.sendUsersBet = function (cost, odds, stake, result, game) {
        console.log('Wysyłam zapytanie z tym rezultatem:' + result);
        return this.http
            .post(this.url + 'add', JSON.stringify({ cost: cost, odds: odds, stake: stake, result: result, game: game }), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            console.log(res);
            return res.json();
        })
            .catch(this.handleError);
    };
    return BetService;
}());
BetService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BetService);
exports.BetService = BetService;
//# sourceMappingURL=bet.service.js.map