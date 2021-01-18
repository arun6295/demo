var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ckdemo"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO products(productName, categoryId) VALUES ('iPhone', 1), ('Galaxy Note',1), ('Apple Watch',2), ('Samsung Galary Watch',2);";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});