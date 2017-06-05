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
 * Created by akselon on 2017-05-07.
 */
var core_1 = require("@angular/core");
var game_1 = require("../models/game");
var GameComponent = (function () {
    function GameComponent() {
        this.disableButtons = false;
    }
    return GameComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", game_1.Game)
], GameComponent.prototype, "game", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], GameComponent.prototype, "disableButtons", void 0);
GameComponent = __decorate([
    core_1.Component({
        selector: 'game',
        templateUrl: './assets/game.component.html',
        styleUrls: ['./assets/game.component.css']
    })
], GameComponent);
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map