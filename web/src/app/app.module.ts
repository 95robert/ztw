import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdTabsModule, MdCardModule, MdButtonModule, MdIconModule, MdIconRegistry, MdInputModule} from '@angular/material';

import { AppComponent }        from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent }     from './heroes.component';
import { HeroService }         from './hero.service';
import {DashboardComponent} from "./dashboard.component";
import {LoginComponent} from "./login.component";
import {PrivateComponent} from "./private.component";

// import 'hammerjs';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
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
        PrivateComponent
    ],
    providers: [
        HeroService,
        MdIconRegistry
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}