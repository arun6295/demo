
var mysql=require('mysql');
var con=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:'today'
    }
);

con.connect(function(err)
{
    if(err) throw err;
    console.log("connected!");
    var sql="DROP TABLE customers";
    con.query(sql,function(err,result)
     {
       if(err) throw err;
       console.log('table deleted');
      });
}); 



