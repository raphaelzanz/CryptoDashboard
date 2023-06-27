//this code is no longer in use....

const mysql = require('mysql2');
const util = require('util');
const config = require('config');

const connection = mysql.createConnection({
    host: config.get('mysql.host'),
    user: config.get('mysql.user'),
    password: config.get('mysql.password'),
    database: config.get('mysql.database'),
    port: config.get('mysql.port')
});



connection.connect = util.promisify(connection.connect);
connection.query = util.promisify(connection.query);

module.exports = connection;


