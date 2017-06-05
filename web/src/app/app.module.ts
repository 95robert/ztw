import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdTabsModule, MdCardModule, MdButtonModule, MdIconModule, MdIconRegistry, MdInputModule,
    MdListModule, MdGridListModule, MdTooltipModule, MdDialog, MaterialModule
} from '@angular/material';

import { AppRoutingModule }     from './app-routing.module';
import {AuthGuard} from './guards/auth.guard';

// Components
import { AppComponent }        from './components/app.component';
import {LoginComponent} from './components/login.component';
import {ProfileComponent, ChangeSettingsDialog} from './components/profile.component';
import {AlertBoxComponent} from './components/shared/alert-box.component';
import {GamesComponent} from './components/games.component';
import {GameService} from './services/game.service';
import {LoaderComponent} from './components/shared/loader.component';
import {GameComponent} from './components/game.component';
import {MatchComponent} from './components/match.component';
import {TipsterComponent} from './components/tipster.component';
import {TipsterService} from './services/tipster.service';
import {BetService} from './services/bet.service';
import {UserService} from './services/user.service';
import {BetComponent} from './components/bet.component';
import {TipsterboxComponent} from './components/shared/tipsterbox.component';
import {TipstersComponent} from './components/tipsters.component';
import {RankingComponent} from "./components/ranking.component";

// import 'hammerjs';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MdCardModule,
        MdButtonModule,
        MdIconModule,
        MdInputModule,
        MdTabsModule,
        MdListModule,
        MdGridListModule,
        MdTooltipModule,
        MaterialModule
    ],
    declarations: [
        AppComponent,
        GamesComponent,
        LoginComponent,
        ProfileComponent,
        AlertBoxComponent,
        LoaderComponent,
        GameComponent,
        MatchComponent,
        TipsterComponent,
        BetComponent,
        TipsterboxComponent,
        ChangeSettingsDialog,
        TipstersComponent,
        RankingComponent
    ],
    entryComponents: [
        ChangeSettingsDialog
    ],
    providers: [
        MdIconRegistry,
        MdDialog,
        AuthGuard,
        GameService,
        TipsterService,
        BetService,
        UserService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
