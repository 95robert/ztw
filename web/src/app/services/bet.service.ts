/**
 * Created by Aksel on 2017-05-08.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Bet} from '../models/bet';
import {Tipster} from "../models/tipster";

@Injectable()
export class BetService {
    private url = 'api/bet';  // URL to web api
    // private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }
    getBetsForGame(id: number): Promise<Bet[]> {
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
                let t = new Tipster(1, 'akselon', 'Aksel Nooitgedagt', 0, 0, 0, 0, 0, 0, 0, 0);
                resolve([
                    new Bet(1, 100, 5, 1000, 1, 1, t),
                    new Bet(1, 100, 5, 1000, 1, 1, t),
                    new Bet(2, 200, 4, 100, 2, 1, t),
                    new Bet(3, 100, 5, 1000, 0, 1, t)
                ]);
            }, 500);
        });
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}
