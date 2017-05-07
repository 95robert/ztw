/**
 * Created by Aksel on 2017-05-07.
 */
import {Component, Input} from '@angular/core';
import {Game} from '../../models/game';

@Component({
    selector: 'game',
    template: `
        <md-card>
            <header>{{game.date | date: 'mediumDate'}}</header>
            <div class="flex-container">
                <div class="flex-team">
                    <img class="img-circle" src="https://kiwicdn.akamaized.net/90ed/JtzB4vEpsbVrGFjSCsvGKj.jpg">
                    <p>{{game.teamOne.name}}</p>
                </div>
                <div class="flex-vs">vs</div>
                <div class="flex-team">
                <img class="img-circle" 
                     src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/FC_Barcelona_(crest).svg/720px-FC_Barcelona_(crest).svg.png">
                    <p>{{game.teamTwo.name}}</p>
                </div>
            </div>
            <div class="buttons">
                <a md-raised-button routerLink=".">Pokaż tipy</a>
            </div>
        </md-card>
    `,
    styles: [`
        md-card {
            color: #581845;
        }
        header {
            text-align: center;
            font-size: 20px;
            font-weight: 700;
            justify-content: center;
        }
        .flex-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        .flex-team {
            text-align: center;
            margin: 10px 20px;
        }
        .flex-team p {
            font-size: 25px;
            color: #FF5733;
            font-weight: 700;
            margin: 0;
        }
        
        .flex-vs {
            font-size: 40px;
            color: #ffc300;
            padding: 0;
            margin: 0;
        }
        .img-circle {
            width: 50%;
            border-radius: 50%;
            height: auto;
        }
    `]
})
export class GameComponent {
    @Input() game: Game;
}

