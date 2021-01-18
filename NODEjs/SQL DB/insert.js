
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
    var sql="INSERT INTO customer (id,name,address) VALUES('2','WILL','NY')";
    
    con.query(sql,function(err,result)
     {
       if(err) throw err;
       console.log("inserted:"+result.affectedRows);
      });
}); 



