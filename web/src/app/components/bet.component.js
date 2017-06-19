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
 * Created by akselon on 2017-05-08.
 */
var core_1 = require("@angular/core");
var bet_1 = require("../models/bet");
var BetComponent = (function () {
    function BetComponent() {
    }
    return BetComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", bet_1.Bet)
], BetComponent.prototype, "bet", void 0);
BetComponent = __decorate([
    core_1.Component({
        selector: 'bet',
        templateUrl: './assets/bet.component.html',
        styleUrls: ['./assets/bet.component.css']
    })
], BetComponent);
exports.BetComponent = BetComponent;
//# sourceMappingURL=bet.component.js.map