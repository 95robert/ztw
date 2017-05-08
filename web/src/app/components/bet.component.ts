/**
 * Created by Aksel on 2017-05-08.
 */
import {Component, Input} from '@angular/core';
import {Bet} from '../models/bet';

@Component({
    selector: 'bet',
    template: `
        <md-card>
            <div class="two-parts">
                <div class="left"><tipster-box [tipster]="bet.tipster"></tipster-box></div>
                <div class="right">
                    <p>Typ:</p>
                    <div [ngSwitch]="bet.result" class="result-container">
                        <div *ngSwitchCase="0" class="no-team">Remis</div>
                        <div *ngSwitchCase="1" class="team">
                            <img class="img-circle"
                                 src="{{teamOneLogo}}">
                            <p>Barcelona</p>
                        </div>
                        <div *ngSwitchCase="2" class="team">
                            <img class="img-circle"
                                 src="{{teamTwoLogo}}">
                            <p>Real Madryt</p>
                        </div>
                        <div *ngSwitchDefault>Błąd wyboru typu</div>
                    </div>
                </div>
            </div>
        </md-card>
    `,
    styles: [`
        .two-parts div {
            width: 50%;
        }
        .two-parts:after {
            content: '';
            display: block;
            clear: both;
        }
        .left { float: left; }
        .right { float: right; }
        .img-circle { width: 50%; }
        .team {
            margin: auto;
            font-size: 25px;
            color: #FF5733;
            font-weight: 700;
        }
        .no-team {
            margin: auto;
            font-size: 25px;
            font-weight: 700;
        }
        .result-container {
            width: 100% !important;
            text-align: center;
        }
    `]
})
export class BetComponent {
    public teamOneLogo: string
        = 'https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_(crest).svg/720px-FC_Barcelona_(crest).svg.png';
    public teamTwoLogo: string
        = 'https://kiwicdn.akamaized.net/90ed/JtzB4vEpsbVrGFjSCsvGKj.jpg';
    @Input() bet: Bet;
}

