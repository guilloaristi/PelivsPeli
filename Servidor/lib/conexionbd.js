var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'Ga#8028714',
    database: 'competencias'
});

module.exports = connection;