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
    // private headers = new Headers({'Content-Type': 'application/json'});
    function BetService(http) {
        this.http = http;
        this.url = 'api/bet/'; // URL to web api
    }
    BetService.prototype.getBetsForGame = function (id) {
        return this.http.get(this.url + 'filter?game=' + id)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
        // return new Promise((resolve) => {
        //     // We call resolve(...) when what we were doing async succeeded, and reject(...) when it failed.
        //     // In this example, we use setTimeout(...) to simulate async code.
        //     // In reality, you will probably be using something like XHR or an HTML5 API.
        //     setTimeout(function(){
        //         let t = new Tipster(1, 'akselon', 'Aksel Nooitgedagt', 0, 0, 0, 0, 0, 0, 0, 0);
        //         resolve([
        //             new Bet(1, 100, 5, 1000, 1, 1, t),
        //             new Bet(1, 100, 5, 1000, 1, 1, t),
        //             new Bet(2, 200, 4, 100, 2, 1, t),
        //             new Bet(3, 100, 5, 1000, 0, 1, t)
        //         ]);
        //     }, 500);
        // });
    };
    BetService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return BetService;
}());
BetService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BetService);
exports.BetService = BetService;
//# sourceMappingURL=bet.service.js.map