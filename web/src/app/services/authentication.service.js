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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var AuthenticationService = (function () {
    function AuthenticationService(router, http) {
        this.router = router;
        this.http = http;
        this.apiUrl = 'api/'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    AuthenticationService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem("currentUser");
        this.router.navigate(['/login']);
    };
    AuthenticationService.prototype.login = function (username, password) {
        return this.http
            .post(this.apiUrl + 'login', JSON.stringify({ username: username, password: password }), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            if (res.json().ok) {
                localStorage.setItem("currentUser", username);
            }
            return res.json();
        })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.register = function (login, email, password1, password2) {
        return this.http
            .post(this.apiUrl + 'register', JSON.stringify({ email: email, login: login, password: password1, repassword: password2 }), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            if (res.json().ok) {
                localStorage.setItem("currentUser", login);
            }
            return res.json();
        })
            .catch(this.handleError);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map