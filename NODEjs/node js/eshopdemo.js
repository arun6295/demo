//express server

var expressModule=require('express'); //loading express  module
var expressObject=expressModule();  //object

var bodyParser = require("body-parser");
expressObject.use(bodyParser.urlencoded({ extended: false }));
expressObject.use(bodyParser.json());
expressObject.use(expressModule.static('../client'));

expressObject.use(function(req, res, next) { //allow cross origin requests//cors access
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
   res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//mongo database
var mongodbModule=require('mongodb');
var mongoDbObject=mongodbModule.MongoClient;

var url="mongodb://localhost:27017/funlab";
var dbobject;

mongoDbObject.connect(url,function(err,connection){
    if(err) throw err;
    console.log("mongodb connected");
 
    dbobject=connection.db("funlaborg");
    console.log("database created");

});


var employeed;

expressObject.get('/getemployees',function(req,res){
    dbobject.collection("employee").find({}).toArray(function(err,result)
    {
        if(err) throw err;
        employeed=result;

        res.send(employeed);
        console.log(employeed);

    }
     
    );



});
//post in to database through postman
expressObject.post('/addemp',function(req,res){
    var empdata={
        empid:req.body.empid,
        empname:req.body.empname,
        empsal:req.body.empsal,
};
dbobject.collection("employee").insertOne(empdata,function(err,res){
    if (err) throw err;
    console.log("document inserted");

});
console.log(empdata);
res.send(empdata);
});



var listen=expressObject.listen(5050,function(){
    console.log("node server running");
});
