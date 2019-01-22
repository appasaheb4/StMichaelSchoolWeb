const express = require("express");
const path = require("path");
const mysql = require("mysql");
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

// connection configurations
const connection = mysql.createConnection({
  host: "db4free.net",
  user: "stmichaelschool",
  password: "developer",
  database: "stmichaelschool"
});

// connect to database
connection.connect(function(err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server.");
});

// Retrieve all todos
app.get("/api/getUserTypes", function(req, res) {
  connection.query("SELECT * FROM tblUserTypes", function(
    error,
    results,
    fields
  ) {  
    if (error) throw error;
    return res.send({ data: results });
  });
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
