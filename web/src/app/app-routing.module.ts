/**
 * Created by akselon on 2017-04-09.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './components/dashboard.component';
import { HeroesComponent }      from './components/heroes.component';
import { HeroDetailComponent }  from './components/hero-detail.component';
import {LoginComponent} from "./components/login.component";
import {PrivateComponent} from "./components/private.component";
import { AuthGuard } from './guards/auth.guard';
import {GamesComponent} from "./components/games.component";

const routes: Routes = [
    { path: '', redirectTo: '/games', pathMatch: 'full' },
    { path: 'login',  component: LoginComponent },
    { path: 'games',  component: GamesComponent},
    { path: 'home',  component: PrivateComponent, canActivate: [AuthGuard] },

    // Routy z tutoriala
    // { path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuard]  },
    // { path: 'detail/:id', component: HeroDetailComponent, canActivate: [AuthGuard]  },
    // { path: 'heroes',     component: HeroesComponent, canActivate: [AuthGuard]  }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
