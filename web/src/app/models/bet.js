"use strict";
var Bet = (function () {
    function Bet(id, cost, odds, stake, result, game, tipster) {
        this.id = id;
        this.cost = cost;
        this.odds = odds;
        this.stake = stake;
        this.result = result;
        this.game = game;
        this.tipster = tipster;
    }
    ;
    return Bet;
}());
exports.Bet = Bet;
//# sourceMappingURL=bet.js.map