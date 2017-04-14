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
var user_1 = require("../models/user");
var users = [
    new user_1.User(1, 'admin@admin.com', 'adm9'),
    new user_1.User(2, 'user1@gmail.com', 'a23'),
    new user_1.User(3, 'test', 'test'),
];
var AuthenticationService = (function () {
    function AuthenticationService(router) {
        this.router = router;
    }
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem("currentUser");
        this.router.navigate(['/login']);
    };
    AuthenticationService.prototype.login = function (user) {
        var authenticatedUser = users.find(function (u) { return u.email === user.email; });
        if (authenticatedUser && authenticatedUser.password === user.password) {
            console.log("Udało się");
            localStorage.setItem("currentUser", "id_" + authenticatedUser.id);
            this.router.navigate(['/home']);
            return true;
        }
        return false;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [router_1.Router])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map