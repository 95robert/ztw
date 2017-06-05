/**
 * Created by akselon on 2017-04-09.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login.component';
import {ProfileComponent} from './components/profile.component';
import { AuthGuard } from './guards/auth.guard';
import {GamesComponent} from './components/games.component';
import {MatchComponent} from './components/match.component';
import {TipsterComponent} from './components/tipster.component';
import {TipstersComponent} from './components/tipsters.component';
import {RankingComponent} from './components/ranking.component';

const routes: Routes = [
    { path: '', redirectTo: '/games', pathMatch: 'full' },
    { path: 'login',  component: LoginComponent },
    { path: 'profile',  component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'games',  component: GamesComponent},
    { path: 'tipsters',  component: TipstersComponent},
    { path: 'ranking',  component: RankingComponent},
    { path: 'match/:id', component: MatchComponent, canActivate: [AuthGuard]  },
    { path: 'tipster/:id', component: TipsterComponent, canActivate: [AuthGuard]  }
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
