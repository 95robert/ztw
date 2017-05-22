/**
 * Created by akselon on 2017-04-09.
 */
export class HttpResult {
    constructor(
        public ok: boolean, // określa, czy udało się wykonać zapytanie
        public error_cod = 0, // kod błędu
        public error_msg = '' // opis błędu
    ) { }
}
