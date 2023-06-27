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


// module.exports = (connection) => async (req,res,next) => {
    module.exports =  async (req,res,next) => {

    
    try{
        //await db.connect();
        req.db = connection;
        console.log("connected db to req")
        return next();
    }catch(err){
        return next({status: 423, message: err.message});
    }

}




// connection.connect(function(err){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("connected to db")

// })


// module.exports = connection;