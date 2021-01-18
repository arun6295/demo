
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
    var sql="CREATE TABLE customer (id INT AUTO_INCREMENT PRIMARY KEY, name varchar(255) NOT NULL,address varchar(255))";
    con.query(sql,function(err,result)
     {
       if(err) throw err;
       console.log("table created");
      });
}); 



