import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdTabsModule, MdCardModule, MdButtonModule, MdIconModule, MdIconRegistry, MdInputModule} from '@angular/material';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }     from './app-routing.module';
import { HeroService }         from './services/hero.service';
import {AuthGuard} from "./guards/auth.guard";

// Components
import { AppComponent }        from './components/app.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { HeroesComponent }     from './components/heroes.component';
import {DashboardComponent} from "./components/dashboard.component";
import {LoginComponent} from "./components/login.component";
import {PrivateComponent} from "./components/private.component";
import {AlertBoxComponent} from "./components/shared/alert-box.component";
import {HeroSearchComponent} from "./components/hero-search.component";

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
        MdTabsModule
    ],
    declarations: [
        AppComponent,
        HeroDetailComponent,
        HeroesComponent,
        DashboardComponent,
        LoginComponent,
        PrivateComponent,
        AlertBoxComponent,
        HeroSearchComponent
    ],
    providers: [
        HeroService,
        MdIconRegistry,
        AuthGuard
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}