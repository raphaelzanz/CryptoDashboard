class UserSymbol {
    constructor (db) {
        this.db = db;
    }

    async add({userId, symbol}){
        return this.db.execute(`
        insert into users_symbols (user_id, symbol) 
        values (? , ?) 
        `,[
            userId,
            symbol,
        ]);
    };

}

module.exports = UserSymbol;