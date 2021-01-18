
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
    var sql="DELETE FROM customers WHERE name='BELL'";
    con.query(sql,function(err,result)
     {
       if(err) throw err;
       console.log("deleted"+result.affectedRows);
      });
}); 



