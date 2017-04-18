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
var user_1 = require("../models/user");
var users = [
    new user_1.User(1, 'admin@admin.com', 'adm9'),
    new user_1.User(2, 'user1@gmail.com', 'a23'),
    new user_1.User(3, 'test', 'test'),
];
var AuthenticationService = (function () {
    function AuthenticationService(router, http) {
        this.router = router;
        this.http = http;
        this.apiUrl = 'http://localhost:8000/api/'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem("currentUser");
        this.router.navigate(['/login']);
    };
    /*
        login(user : User){
            var authenticatedUser = users.find(u => u.email === user.email);
            if (authenticatedUser && authenticatedUser.password === user.password){
                console.log("Udało się");
                localStorage.setItem("currentUser", "id_"+authenticatedUser.id);
                this.router.navigate(['/home']);
                return true;
            }
            return false;
        }*/
    AuthenticationService.prototype.login = function (username, password) {
        return this.http
            .post(this.apiUrl + 'login2', JSON.stringify({ username: username, password: password }), { headers: this.headers })
            .toPromise()
            .then(function (res) {
            console.log(res);
            return true;
        })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AuthenticationService.prototype.register = function (newUser) {
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map