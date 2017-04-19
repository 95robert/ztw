/**
 * Created by akselon on 2017-04-09.
 */
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/login" routerLinkActive="active">Mój profil</a>
            <a routerLink="/home" routerLinkActive="active">Dla zalogowanych</a>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        </nav>

        <div class="app-content">
            <router-outlet></router-outlet>
        </div>
    `,
    styleUrls: ['./assets/app.component.css']
})
export class AppComponent {
    title = 'Bettinger';
}

