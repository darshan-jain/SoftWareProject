var mysql = require('mysql2');

var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
port: "3307", 
database: "elective"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE electiveinfo (name VARCHAR(255), rollno VARCHAR(255),elective1 VARCHAR(255),elective2 VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");

    con.end();
  });

});