var mysql = require('mysql2');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
port: "3307"
});
con.connect(function(err) {
if (err) throw err;
console.log("Connected!");
con.query("CREATE DATABASE elective", function (err, result) {
if (err) throw err;
console.log("Database created");
con.end();
});

});