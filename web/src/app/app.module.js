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
var http_1 = require("@angular/http");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var app_routing_module_1 = require("./app-routing.module");
var auth_guard_1 = require("./guards/auth.guard");
// Components
var app_component_1 = require("./components/app.component");
var login_component_1 = require("./components/login.component");
var profile_component_1 = require("./components/profile.component");
var alert_box_component_1 = require("./components/shared/alert-box.component");
var games_component_1 = require("./components/games.component");
var game_service_1 = require("./services/game.service");
var loader_component_1 = require("./components/shared/loader.component");
var game_component_1 = require("./components/game.component");
var match_component_1 = require("./components/match.component");
var tipster_component_1 = require("./components/tipster.component");
var tipster_service_1 = require("./services/tipster.service");
var bet_service_1 = require("./services/bet.service");
var user_service_1 = require("./services/user.service");
var bet_component_1 = require("./components/bet.component");
var tipsterbox_component_1 = require("./components/shared/tipsterbox.component");
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
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule,
            animations_1.BrowserAnimationsModule,
            material_1.MdCardModule,
            material_1.MdButtonModule,
            material_1.MdIconModule,
            material_1.MdInputModule,
            material_1.MdTabsModule,
            material_1.MdListModule,
            material_1.MdGridListModule,
            material_1.MdTooltipModule,
            material_1.MaterialModule
        ],
        declarations: [
            app_component_1.AppComponent,
            games_component_1.GamesComponent,
            login_component_1.LoginComponent,
            profile_component_1.ProfileComponent,
            alert_box_component_1.AlertBoxComponent,
            loader_component_1.LoaderComponent,
            game_component_1.GameComponent,
            match_component_1.MatchComponent,
            tipster_component_1.TipsterComponent,
            bet_component_1.BetComponent,
            tipsterbox_component_1.TipsterboxComponent,
            profile_component_1.ChangeSettingsDialog
        ],
        entryComponents: [
            profile_component_1.ChangeSettingsDialog
        ],
        providers: [
            material_1.MdIconRegistry,
            material_1.MdDialog,
            auth_guard_1.AuthGuard,
            game_service_1.GameService,
            tipster_service_1.TipsterService,
            bet_service_1.BetService,
            user_service_1.UserService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map