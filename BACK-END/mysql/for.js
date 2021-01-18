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
  var sql = "CREATE TABLE products( productId INT AUTO_INCREMENT PRIMARY KEY, productName varchar(100) not null, categoryId INT, CONSTRAINT fk_category FOREIGN KEY (categoryId)  REFERENCES categories(categoryId) ON UPDATE SET NULL ON DELETE SET NULL )ENGINE=INNODB;"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});