var MongoClient=require('mongodb').MongoClient;
var url="mongodb://127.0.0.1:27017/today";
MongoClient.connect(url,function(err,db)
{
    if(err) throw error;
    console.log("connection created");
});