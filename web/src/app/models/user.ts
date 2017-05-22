/**
 * Created by akselon on 2017-04-13.
 */
export class User {
    constructor(
        public id: number,
        public login: string,
        public password: string,
        public subscriptionCost: string,
        public image: string,
        public about: string
    ) { }
}
