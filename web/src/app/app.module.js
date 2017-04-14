"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var app_routing_module_1 = require("./app-routing.module");
var hero_service_1 = require("./services/hero.service");
var auth_guard_1 = require("./guards/auth.guard");
// Components
var app_component_1 = require("./components/app.component");
var hero_detail_component_1 = require("./components/hero-detail.component");
var heroes_component_1 = require("./components/heroes.component");
var dashboard_component_1 = require("./components/dashboard.component");
var login_component_1 = require("./components/login.component");
var private_component_1 = require("./components/private.component");
var alert_box_component_1 = require("./components/shared/alert-box.component");
// import 'hammerjs';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            app_routing_module_1.AppRoutingModule,
            animations_1.BrowserAnimationsModule,
            material_1.MdCardModule,
            material_1.MdButtonModule,
            material_1.MdIconModule,
            material_1.MdInputModule,
            material_1.MdTabsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            hero_detail_component_1.HeroDetailComponent,
            heroes_component_1.HeroesComponent,
            dashboard_component_1.DashboardComponent,
            login_component_1.LoginComponent,
            private_component_1.PrivateComponent,
            alert_box_component_1.AlertBoxComponent
        ],
        providers: [
            hero_service_1.HeroService,
            material_1.MdIconRegistry,
            auth_guard_1.AuthGuard
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map