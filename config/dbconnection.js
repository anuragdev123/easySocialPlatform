var database = require('../config/database');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: database.host,
    user: database.username,
    password: database.password,
    database: database.dbname
});

connection.connect(function (err) {
    if (err)
        throw err;
    console.log("connected")
});

module.exports = connection;