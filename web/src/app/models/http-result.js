"use strict";
/**
 * Created by akselon on 2017-04-09.
 */
var HttpResult = (function () {
    function HttpResult(ok, // określa, czy udało się wykonać zapytanie
        error_cod, // kod błędu
        error_msg // opis błędu
    ) {
        if (error_cod === void 0) { error_cod = 0; }
        if (error_msg === void 0) { error_msg = ''; } // opis błędu
        this.ok = ok;
        this.error_cod = error_cod;
        this.error_msg = error_msg; // opis błędu
    }
    return HttpResult;
}());
exports.HttpResult = HttpResult;
//# sourceMappingURL=http-result.js.map