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
var router_1 = require("@angular/router");
var tipster_service_1 = require("../services/tipster.service");
var TipsterComponent = (function () {
    function TipsterComponent(route, tipsterService) {
        this.route = route;
        this.tipsterService = tipsterService;
        this.isLoading = true;
        this.showWarning = false;
        this.warningMessage = '';
    }
    TipsterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.tipsterService.getTipster(_this.id)
                .then(function (tipster) {
                _this.tipster = tipster;
                _this.isLoading = false;
            })
                .catch(function (message) {
                _this.warningMessage = message;
                _this.showWarning = true;
                _this.isLoading = false;
            });
        });
    };
    TipsterComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    return TipsterComponent;
}());
TipsterComponent = __decorate([
    core_1.Component({
        selector: 'tipster',
        templateUrl: './assets/tipster.component.html',
        styleUrls: ['./assets/tipster.component.css', './assets/common.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        tipster_service_1.TipsterService])
], TipsterComponent);
exports.TipsterComponent = TipsterComponent;
//# sourceMappingURL=tipster.component.js.map