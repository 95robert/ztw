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
var TipsterService = (function () {
    function TipsterService(http) {
        this.http = http;
        this.url = 'api/tipster'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    TipsterService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    TipsterService.prototype.getTipster = function (id) {
        return this.http.get(this.url + '/show/' + id)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    TipsterService.prototype.getTipsters = function (login) {
        return this.http
            .post(this.url + "/filter", JSON.stringify({ login: login }), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    return TipsterService;
}());
TipsterService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TipsterService);
exports.TipsterService = TipsterService;
//# sourceMappingURL=tipster.service.js.map