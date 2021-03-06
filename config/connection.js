// const mysql = require("mysql");
//
// var connection = mysql.createConnection({
//
//     // port: 5432,
//     // host: "ec2-107-22-167-179.compute-1.amazonaws.com",
//     // user: "ahpqvvjnqyphoo",
//     // password: "353efc538c7b7dbcbf0ac860236a5f232de4cb59eb7f9d6d7d1ad5d16e7df27d",
//     // database: "burgers_dbddq7bkpk55r7sq"
//
//     port: 3306,
//     host: "localhost",
//     user: "root",
//     password: "cangetin",
//     database: "burgers_db"
//
//     // port: 3306,
//     // host: "us-cdbr-iron-east-05.cleardb.net",
//     // user: "ba614281ff3063",
//     // password: "8ec64b64",
//     // database: "heroku_cb581b6cdbc1be9"
// });
//
// // Make connection.
// connection.connect(function(err) {
//     if (err) {
//         console.error("error connecting: " + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });
//
// // Export connection for our ORM to use.
// module.exports = connection;
//

// Pull in required dependencies
var mysql = require('mysql');

// Create the MySQL connection object
var connection;

if (process.env.JAWSDB_URL) {
    // DB is JawsDB on Heroku
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // DB is local on localhost
    connection = mysql.createConnection({
        port: 3306,
        host: 'localhost',
        user: 'root',
        password: 'cangetin',
        database: 'burgers_db'
    })
};

// Make the connection to MySQL
connection.connect(function(err) {
    if (err) {
        console.error('ERROR: connection error -- ' + err.stack + '\n\n');
        return;
    }
    console.log('Connected as id ' + connection.threadId + '\n\n');
});

// Export connection for ORM use
module.exports = connection;
