/**
 * Created by akselon on 2017-04-09.
 */
import {Component, OnInit} from '@angular/core';

import { Hero } from '../models/hero';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './assets/dashboard.component.html',
    styleUrls: [ './assets/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }
}

