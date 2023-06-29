const mysql = require('mysql2');
const util = require('util');
const config = require('config');


const connection = mysql.createConnection({
    host: config.get('mysql.host'),
    user: config.get('mysql.user'),
    password: config.get('mysql.password'),
    database: config.get('mysql.database'),
    port: config.get('mysql.port')
    // host: "localhost",
    // user: "username",
    // password: "password",
    // database: "mydb",
    // port: 3306
});


connection.connect = util.promisify(connection.connect);
connection.query = util.promisify(connection.query);

(async () => {
    try{
        await connection.connect();
        console.log("connected");
        await connection.query(`
        CREATE TABLE IF NOT EXISTS users (
            id int auto_increment,
            github_id varchar(255) not null,
            primary key (id)
          ) 
       
      `);
      console.log("created users table");

        await connection.query(`
            CREATE TABLE IF NOT EXISTS users_symbols (
            id int auto_increment,
            user_id int not null,
            symbol varchar(3) not null,
            primary key (id)
          ) 
    
        `);
     console.log("created users_symbol table")
    }catch(e){
        console.log("error = ", e);
    }
})();