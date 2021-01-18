
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
    var sql="INSERT INTO products (productId,productName,id) VALUES('8','arun','2')";
    
    con.query(sql,function(err,result)
     {
       if(err) throw err;
       console.log("inserted:"+result.affectedRows);
      });
}); 



