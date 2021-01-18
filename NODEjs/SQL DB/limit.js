
var mysql=require('mysql');
var con=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"root",
        database:'today'
    }
);

con.connect(function(err)
{
    if(err) throw err;
    console.log("connected!");
    var sql="SELECT * FROM customers WHERE address='NYC'";
    con.query(sql,function(er,result)
     {
       if(err) throw err;
       console.log(result);
      });
}); 



