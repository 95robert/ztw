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
    private url = 'api/game';  // URL to web api
    // private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    getGames(): Promise<Game[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => {
                return response.json() as Game[];
            })
            .catch(this.handleError);
    }
    getGame(id: number): Promise<Game> {
        return this.http.get(this.url + '/' + id)
            .toPromise()
            .then(response => {
                return response.json() as Game;
            })
            .catch(this.handleError);
    }
}
