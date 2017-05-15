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
    locale = document['locale'] as string;
    menuShowed = false;
    public toggleMenu() {
        this.menuShowed = !this.menuShowed;
        console.log(this.locale);
        console.log('menuShowed = ', this.menuShowed);
    }
    public menuLinkClicked () {
        this.menuShowed = false;
    }
}

