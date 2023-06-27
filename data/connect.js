const mysql = require('mysql2');
const util = require('util');

const connection = mysql.createConnection({
    host: "localhost",
    user: "username",
    password: "password",
    database: "mydb",
    port: 3306
});

connection.connect = util.promisify(connection.connect);
connection.query = util.promisify(connection.query);

module.exports = connection;


