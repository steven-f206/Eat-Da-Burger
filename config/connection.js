const mysql = require('mysql');

// Create Connection
let connection;

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

// Making the connection
connection.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log("connected as id " + connection.threadId);
})

// Export connection to require inside orm.js
module.exports = connection;