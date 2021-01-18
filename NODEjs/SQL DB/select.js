
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
    con.query("SELECT * FROM customers",function(err,result,fields)
     {
       if(err) throw err;
       console.log(result);
      });
}); 



