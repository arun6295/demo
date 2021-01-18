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
  var sql = "CREATE TABLE categories( categoryId INT AUTO_INCREMENT PRIMARY KEY, categoryName VARCHAR(100)  NOT NULL  ) ENGINE=INNODB;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});