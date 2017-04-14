import { Component } from '@angular/core';
import { Hero } from '../models/hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from '../services/hero.service';
import { OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'my-heroes',
    templateUrl: './assets/heroes.component.html',
    styleUrls: [ './assets/heroes.component.css' ]
  // providers: [HeroService]
})
export class HeroesComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;
    constructor(
        private router: Router,
        private heroService: HeroService) { }
    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    ngOnInit(): void {
        this.getHeroes();
    }
    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}

