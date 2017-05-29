/**
 * Created by Aksel on 2017-05-08.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Bet} from '../models/bet';
import {Tipster} from "../models/tipster";
import {HttpResult} from "../models/http-result";

@Injectable()
export class BetService {
    private url = 'api/bet/';  // URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }
    getBetsForGame(id: number): Promise<Bet[]> {
        return this.http.get(this.url + 'filter?game=' + id)
            .toPromise()
            .then(response => {
                return response.json() as Bet[];
            })
            .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    sendUsersBet(cost: number, odds: number, stake: number, result: number, game: number): Promise<HttpResult> {
        console.log('Wysyłam zapytanie z tym rezultatem:' + result);
        return this.http
            .post(this.url + 'add', JSON.stringify({cost: cost, odds: odds, stake: stake, result: result, game: game}),
                {headers: this.headers})
            .toPromise()
            .then(res => {
                console.log(res);
                return res.json() as HttpResult;
            })
            .catch(this.handleError);
    }
}
