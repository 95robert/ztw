/**
 * Created by akselon on 2017-04-24.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Game} from '../models/game';
import {League} from '../models/league';
import {Team} from '../models/team';

@Injectable()
export class GameService {
    // private url = 'api/game';  // URL to web api
    // private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }
    getGames(): Promise<Game[]> {
        // return this.http.get(this.url)
        //     .toPromise()
        //     .then(response => {
        //         return response.json() as Game[];
        //     })
        //     .catch(this.handleError);
        return new Promise((resolve) => {
            // We call resolve(...) when what we were doing async succeeded, and reject(...) when it failed.
            // In this example, we use setTimeout(...) to simulate async code.
            // In reality, you will probably be using something like XHR or an HTML5 API.
            setTimeout(function(){
                let l1 = new League(1, 'BBVA');
                let t1 = new Team(1, 'Barcelona');
                let t2 = new Team(1, 'Real Madryt');
                resolve([
                    new Game(1, new Date('2017-05-07'), 5, 6, l1, t1, t2),
                    new Game(2, new Date('2017-05-07'), 5, 6, l1, t1, t2),
                    new Game(3, new Date('2017-05-07'), 5, 6, l1, t1, t2),
                    new Game(4, new Date('2017-05-17'), 0, 2, l1, t1, t2)
                ]);
            }, 500);
        });
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    getGame(id: number): Promise<Game> {
        // return this.http.get(this.url)
        //     .toPromise()
        //     .then(response => {
        //         return response.json() as Game[];
        //     })
        //     .catch(this.handleError);
        return new Promise((resolve, reject) => {
            // We call resolve(...) when what we were doing async succeeded, and reject(...) when it failed.
            // In this example, we use setTimeout(...) to simulate async code.
            // In reality, you will probably be using something like XHR or an HTML5 API.
            setTimeout(function(){
                let l1 = new League(1, 'BBVA');
                let t1 = new Team(1, 'Barca');
                let t2 = new Team(1, 'Real');
                let games = [
                    new Game(1, new Date('2017-05-07'), 5, 6, l1, t1, t2),
                    new Game(2, new Date('2017-05-07'), 5, 6, l1, t1, t2),
                    new Game(3, new Date('2017-05-07'), 5, 6, l1, t1, t2),
                    new Game(4, new Date('2017-05-17'), 0, 2, l1, t1, t2)
                ];
                for (let game of games) {
                    if (game.id === id) {
                        resolve(game);
                    }
                }
                reject(`Can not find match id = ${id}`);
            }, 500);
        });
    }
}
