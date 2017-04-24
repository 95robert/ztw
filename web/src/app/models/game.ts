/**
 * Created by akselon on 2017-04-24.
 */
import {League} from "./league";
import {Team} from "./team";

export class Game {
    id: number;
    date: 'yyyy-MM-dd';
    teamOneScore: number;
    teamTwoScore: number;
    league: League;
    teamOne: Team;
    teamTwo: Team;
}