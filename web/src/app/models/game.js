"use strict";
var Game = (function () {
    function Game(id, date, teamOneScore, teamTwoScore, league, teamOne, teamTwo) {
        this.id = id;
        this.date = date;
        this.teamOneScore = teamOneScore;
        this.teamTwoScore = teamTwoScore;
        this.league = league;
        this.teamOne = teamOne;
        this.teamTwo = teamTwo;
    }
    ;
    return Game;
}());
exports.Game = Game;
//# sourceMappingURL=game.js.map