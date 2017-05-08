import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdTabsModule, MdCardModule, MdButtonModule, MdIconModule, MdIconRegistry, MdInputModule,
    MdListModule, MdGridListModule, MdTooltipModule
} from '@angular/material';

import { AppRoutingModule }     from './app-routing.module';
import {AuthGuard} from './guards/auth.guard';

// Components
import { AppComponent }        from './components/app-new.component';
import {LoginComponent} from './components/login.component';
import {PrivateComponent} from './components/private.component';
import {AlertBoxComponent} from './components/shared/alert-box.component';
import {GamesComponent} from './components/games.component';
import {GameService} from './services/game.service';
import {LoaderComponent} from './components/shared/loader.component';
import {GameComponent} from './components/game.component';
import {MatchComponent} from './components/match.component';
import {TipsterComponent} from './components/tipster.component';
import {TipsterService} from './services/tipster.service';
import {BetService} from './services/bet.service';
import {BetComponent} from './components/bet.component';
import {TipsterBoxComponent} from './components/shared/tipster-box.component';

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
        MdTooltipModule
    ],
    declarations: [
        AppComponent,
        GamesComponent,
        // HeroDetailComponent,
        // HeroesComponent,
        // DashboardComponent,
        LoginComponent,
        PrivateComponent,
        AlertBoxComponent,
        LoaderComponent,
        GameComponent,
        MatchComponent,
        TipsterComponent,
        BetComponent,
        TipsterBoxComponent
        // HeroSearchComponent
    ],
    providers: [
        // HeroService,
        MdIconRegistry,
        AuthGuard,
        GameService,
        TipsterService,
        BetService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
