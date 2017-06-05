/**
 * Created by akselon on 2017-04-24.
 */
import { Component } from '@angular/core';
import {Location} from '@angular/common';
import {NavigationStart, Router} from '@angular/router';
@Component({
    selector: 'my-app',
    templateUrl: './assets/app.component.html',
    styleUrls: ['./assets/app.component.css']
})
export class AppComponent {
    title = 'Bettinger';
    locale = document['locale'] as string;
    menuShowed = false;
    showBackLink = false;
    firstUrl = '';
    private sub: any;
    constructor(private location: Location,
                router: Router) {
        this.sub = router.events
            .filter(event => event instanceof NavigationStart)
            .subscribe((e: NavigationStart) => {
                let url = e.url;
                if (this.firstUrl === '') {
                    this.firstUrl = url;
                } else if (this.firstUrl !== url) {
                    this.showBackLink = true;
                    this.sub.unsubscribe();
                }
            });
    }
    public toggleMenu() {
        this.menuShowed = !this.menuShowed;
    }
    public menuLinkClicked () {
        this.menuShowed = false;
    }
    public menuLinkBack() {
        this.location.back();
    }
}

