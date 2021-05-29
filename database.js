//Include mysql2 module
const mysql = require('mysql2');


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'geeksforgeeks',
    password:'root'
});


module.exports = connection.promise();