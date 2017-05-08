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
 * Created by Aksel on 2017-05-07.
 */
var core_1 = require("@angular/core");
var game_1 = require("../../models/game");
var GameComponent = (function () {
    function GameComponent() {
    }
    return GameComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", game_1.Game)
], GameComponent.prototype, "game", void 0);
GameComponent = __decorate([
    core_1.Component({
        selector: 'game',
        template: "\n        <md-card>\n            <header>{{game.date | date: 'mediumDate'}}</header>\n            <div class=\"flex-container\">\n                <div class=\"flex-team\">\n                    <img class=\"img-circle\" src=\"https://kiwicdn.akamaized.net/90ed/JtzB4vEpsbVrGFjSCsvGKj.jpg\">\n                    <p>{{game.teamOne.name}}</p>\n                </div>\n                <div class=\"flex-vs\">vs</div>\n                <div class=\"flex-team\">\n                <img class=\"img-circle\" \n                     src=\"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_(crest).svg/720px-FC_Barcelona_(crest).svg.png\">\n                    <p>{{game.teamTwo.name}}</p>\n                </div>\n            </div>\n            <div class=\"buttons\">\n                <a md-raised-button routerLink=\".\">Poka\u017C tipy</a>\n            </div>\n        </md-card>\n    ",
        styles: ["\n        md-card {\n            color: #581845;\n        }\n        header {\n            text-align: center;\n            font-size: 20px;\n            font-weight: 700;\n            justify-content: center;\n        }\n        .flex-container {\n            display: flex;\n            justify-content: space-around;\n            align-items: center;\n        }\n        .flex-team {\n            text-align: center;\n            margin: 10px 20px;\n        }\n        .flex-team p {\n            font-size: 25px;\n            color: #FF5733;\n            font-weight: 700;\n            margin: 0;\n        }\n        \n        .flex-vs {\n            font-size: 40px;\n            color: #ffc300;\n            padding: 0;\n            margin: 0;\n        }\n        .img-circle {\n            width: 50%;\n            border-radius: 50%;\n            height: auto;\n        }\n    "]
    })
], GameComponent);
exports.GameComponent = GameComponent;
//# sourceMappingURL=game.component.js.map