var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "today"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM customers where name='Ramesh'", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});