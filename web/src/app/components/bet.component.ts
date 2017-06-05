/**
 * Created by akselon on 2017-05-08.
 */
import {Component, Input, OnInit} from '@angular/core';
import {Bet} from '../models/bet';

@Component({
    selector: 'bet',
    templateUrl: './assets/bet.component.html',
    styleUrls: ['./assets/bet.component.css']
})
export class BetComponent implements OnInit  {
    public teamOneLogo: string
        = 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_(crest).svg/720px-FC_Barcelona_(crest).svg.png';
    public teamTwoLogo: string
        = 'https://kiwicdn.akamaized.net/90ed/JtzB4vEpsbVrGFjSCsvGKj.jpg';
    @Input() bet: Bet;
    ngOnInit(): void {
        console.log('mam2y', this.bet);
    }
}
