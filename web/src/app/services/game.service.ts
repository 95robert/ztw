/**
 * Created by akselon on 2017-04-24.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Game} from "../models/game";

@Injectable()
export class GameService {
    private url = 'api/game';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }
    getGames(): Promise<Game[]> {
        return this.http.get(this.url)
            .toPromise()
            .then(response => {
                return response.json() as Game[];
            })
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
