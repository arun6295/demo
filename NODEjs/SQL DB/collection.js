var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/today";
var dbobj;
MongoClient.connect(url,function(err,db)
{
    if(err) throw err;
    dbobj=db.db("today");
    

    console.log("connection created");
});