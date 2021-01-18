var mongodbModule = require('mongodb');
mongoDbObject = mongodbModule.MongoClient;

var expressModule = require('express');
var expressObject = expressModule();

var url = "mongodb://localhost:27017/tsting";
var dbObject;
var productList;
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


mongoDbObject.connect(url, function (err, connection) {
    if (err) throw err;
   
    //create database object
    dbObject = connection.db("testing");
    console.log("Database created!");
});

expressObject.get('/getproducts', function (req, res) {
    res.sendFile("C://Users/Administrator/Documents/node js/xena.html");
    var a;
    //get data from database
    dbObject.collection("student").find({}).toArray(function (err, result) {
        if (err) throw err;
        productList = result;
        console.log(productList);
        //res.send(productList);
    });
    //console.log(productList);
});
/*
expressObject.get('/getproduct/:pid', function (req, res) {
    console.log(req.params.pid);
    var pro = { proid: req.params.pid };
    console.log(pro);
    dbObject.collection("product").deleteOne(pro, function (err, result) {
        if (err) throw err;
        var prolist=result;
        console.log(prolist);
    });
    res.send(pro);
});

expressObject.put('/editproduct', function (req, res) {
    var productData = { proid: req.body.pid };
    console.log(req.body.pid);
    var newval = { $set: { proid: req.body.pid, proname: req.body.pname, proprice: req.body.pprice } };
    dbObject.collection("product").updateOne(productData, newval, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
    });
    res.send("product edited successfully");
});*/

expressObject.post('/addproduct-data', function (req, res) {
   
    var productData = { name: req.body.name,
         age: req.body.age, email: req.body.email,city:req.body.city };
    console.log(req.body.name);
    dbObject.collection("student").insertOne(productData, function (err, rs) {
        if (err) throw err;
        console.log("1 document inserted");
    });
    res.send("product added successfully");
});



var server = expressObject.listen(4090, function () {
    console.log('Node server is running..');
});
