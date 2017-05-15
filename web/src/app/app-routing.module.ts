/**
 * Created by akselon on 2017-04-09.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login.component';
import {PrivateComponent} from './components/private.component';
import { AuthGuard } from './guards/auth.guard';
import {GamesComponent} from './components/games.component';
import {MatchComponent} from './components/match.component';
import {TipsterComponent} from './components/tipster.component';

const routes: Routes = [
    { path: '', redirectTo: '/games', pathMatch: 'full' },
    { path: 'login',  component: LoginComponent },
    { path: 'home',  component: PrivateComponent, canActivate: [AuthGuard] },
    { path: 'games',  component: GamesComponent},
    { path: 'match/:id', component: MatchComponent, canActivate: [AuthGuard]  },
    { path: 'tipster/:id', component: TipsterComponent, canActivate: [AuthGuard]  }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
