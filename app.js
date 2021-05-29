//Include exported connection object
//from database.js file
const connection = require("./database");

//Assume we are getting userId and email
//in query String at Runtime
const userId = 3;
const email = "user3@example.com";

const sql =
  "SELECT * FROM users WHERE id = " +
  connection.escape(userId) +
  " and email = " +
  connection.escape(email);

connection
  .query(sql)
  .then(([rows, fields]) => {
    console.log(rows);
  })
  .catch((err) => {
    console.log(err);
  });
