var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "today"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "update customers set name='Ramesh' where address='India'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records upated: " + result.affectedRows);
  });
});