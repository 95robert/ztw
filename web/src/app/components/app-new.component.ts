/**
 * Created by akselon on 2017-04-24.
 */
import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    templateUrl: './assets/app.component.html',
    styleUrls: ['./assets/app.component.css']
})
export class AppComponent {
    title = 'Bettinger';
    menuShowed = false;
    public toggleMenu() {
        this.menuShowed = !this.menuShowed
        console.log('menuShowed = ', this.menuShowed);
    }
}

