const mysql = require('mysql');


const pool = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'c10_onlinebankingdb',
})


module.exports = pool;