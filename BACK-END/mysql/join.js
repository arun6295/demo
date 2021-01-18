var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT products.productId, Customers.name, products.productName FROM products INNER JOIN Customers ON products.productId=customers.id;";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});