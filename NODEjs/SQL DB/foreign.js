
var mysql=require('mysql');
var con=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"root",
        database:"today"
    }
);

con.connect(function(err)
{
    if(err) throw err;
    console.log("connected!");
    var sql="CREATE TABLE products (ProductId INT AUTO_INCREMENT PRIMARY KEY, productName varchar(100),id INT, CONSTRAINT fk_customer FOREIGN KEY (id) REFERENCES customer(id) ON UPDATE SET NULL ON DELETE SET NULL)ENGINE=INNODB";
    con.query(sql,function(err,result)
     {
       if(err) throw err;
       console.log("table created");
      });
}); 



