/**
 * Created by akselon on 2017-05-08.
 */
import {Component, Input} from '@angular/core';
import {Bet} from '../models/bet';

@Component({
    selector: 'bet',
    templateUrl: './assets/bet.component.html',
    styleUrls: ['./assets/bet.component.css']
})
export class BetComponent  {
    @Input() bet: Bet;
}
