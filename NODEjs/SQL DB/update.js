
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
    var sql="update customers set name='rao' where address='new york'";
    con.query(sql,function(err,result)
     {
       if(err) throw err;
       console.log("no of records updated"+result.affectedRows);
      });
}); 



