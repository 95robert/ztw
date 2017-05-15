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
 * Created by @akselon on 2017-05-08.
 */
var core_1 = require("@angular/core");
var bet_1 = require("../models/bet");
var BetComponent = (function () {
    function BetComponent() {
        this.teamOneLogo = 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_(crest).svg/720px-FC_Barcelona_(crest).svg.png';
        this.teamTwoLogo = 'https://kiwicdn.akamaized.net/90ed/JtzB4vEpsbVrGFjSCsvGKj.jpg';
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
        template: "\n        <md-card>\n            <div class=\"two-parts\">\n                <div class=\"left\">\n                    <tipsterbox [tipster]=\"bet.tipster\"></tipsterbox>\n                </div>\n                <div class=\"right\">\n                    <p i18n>Type:</p>\n                    <div [ngSwitch]=\"bet.result\" class=\"result-container\">\n                        <div *ngSwitchCase=\"0\" class=\"no-team\" i18n>Draw</div>\n                        <div *ngSwitchCase=\"1\" class=\"team\">\n                            <img class=\"img-circle\"\n                                 src=\"{{teamOneLogo}}\">\n                            <p>Barcelona</p>\n                        </div>\n                        <div *ngSwitchCase=\"2\" class=\"team\">\n                            <img class=\"img-circle\"\n                                 src=\"{{teamTwoLogo}}\">\n                            <p>Real Madryt</p>\n                        </div>\n                        <div *ngSwitchDefault i18n></div>\n                    </div>\n                </div>\n            </div>\n        </md-card>\n    ",
        styles: ["\n        .two-parts div {\n            width: 50%;\n        }\n        .two-parts:after {\n            content: '';\n            display: block;\n            clear: both;\n        }\n        .left { float: left; }\n        .right { float: right; }\n        .img-circle { width: 50%; }\n        .team {\n            margin: auto;\n            font-size: 25px;\n            color: #FF5733;\n            font-weight: 700;\n        }\n        .no-team {\n            margin: auto;\n            font-size: 25px;\n            font-weight: 700;\n        }\n        .result-container {\n            width: 100% !important;\n            text-align: center;\n        }\n    "]
    })
], BetComponent);
exports.BetComponent = BetComponent;
//# sourceMappingURL=bet.component.js.map