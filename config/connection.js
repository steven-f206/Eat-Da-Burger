const mysql = require('mysql');

// Create Connection
const connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Phoenix1',
        database: 'burger_db',
        port: 3306
    });
};

connection.connect();
module.exports = connection; 