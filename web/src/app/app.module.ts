import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdTabsModule, MdCardModule, MdButtonModule, MdIconModule, MdIconRegistry, MdInputModule,
    MdListModule, MdGridListModule
} from '@angular/material';

import { AppRoutingModule }     from './app-routing.module';
// import { HeroService }         from './services/hero.service';
import {AuthGuard} from './guards/auth.guard';

// Components
import { AppComponent }        from './components/app-new.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroesComponent }     from './components/heroes.component';
import {DashboardComponent} from './components/dashboard.component';
import {LoginComponent} from './components/login.component';
import {PrivateComponent} from './components/private.component';
import {AlertBoxComponent} from './components/shared/alert-box.component';
import {HeroSearchComponent} from './components/hero-search.component';
import {GamesComponent} from './components/games.component';
import {GameService} from './services/game.service';
import {LoaderComponent} from './components/shared/loader.component';
import {GameComponent} from './components/shared/game.component';

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
        MdGridListModule
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
        GameComponent
        // HeroSearchComponent
    ],
    providers: [
        // HeroService,
        MdIconRegistry,
        AuthGuard,
        GameService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}