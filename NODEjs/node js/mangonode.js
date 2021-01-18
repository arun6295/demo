var mongomodule=require('mongodb');
mobject=mongomodule.MongoClient;
var url="mongodb://localhost:27017/university";
mobject.connect(url,function(err,x){
    //create database object
    if(err)
    {
        console.log("connection error");
        throw err;
    }
    var dbo=x.db("university");
    //creating collection
    var univ={ "rollno":2, "name":"arunrao", "marks":330 };
    //insert row(document) in table(collection)
    dbo.collection("student").insertOne(univ, function(err,res) {
        if (err) {
            console.log("eror");
        }
        console.log("document created in student collection");
        x.close();

    })
    
    })
    


