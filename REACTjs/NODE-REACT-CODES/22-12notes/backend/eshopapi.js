
var mongodbModule = require('mongodb');
mongoDbObject = mongodbModule.MongoClient;

var expressModule = require('express');
var expressObject = expressModule();

var url = "mongodb://localhost:27017/testing";
var dbObject;
var productList;
var bodyParser = require("body-parser");
expressObject.use(bodyParser.urlencoded({ extended: false }));
expressObject.use(expressModule.static('../client'));

expressObject.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
   res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
expressObject.use(bodyParser.json());


mongoDbObject.connect(url, function (err, connection) {
    if (err) throw err;
    console.log("Database created!");
    //create database object
    dbObject = connection.db("eshop");
});

expressObject.get('/getproducts', function (req, res) {
    var a;
    //get data from database
    dbObject.collection("product").find({}).toArray(function (err, result) {
        if (err) throw err;
        productList = result;
        console.log(productList);
        res.send(productList);
    });
    //console.log(productList);
});

expressObject.get('/deleteproduct/:pid', function (req, res) {
    console.log(req.params.pid);
    var pro = { proid: req.params.pid };
    console.log(pro);
    dbObject.collection("product").deleteOne(pro, function (err, result) {
        if (err) throw err;
        res.send(pro);
    });
});

expressObject.put('/editproduct', function (req, res) {
    var productData = { proid: req.body.pId };
    console.log(req.body.pId);
    var newval = { $set: { proid: req.body.pId, proname: req.body.pName, proprice: req.body.pPrice } };
    dbObject.collection("product").updateOne(productData, newval, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
    });
    res.send("product added successfully");
});

expressObject.post('/addproduct', function (req, res) {
    var productData = { proid: req.body.pId,
         proname: req.body.pName, proprice: req.body.pPrice };
    console.log(req.body.pId);
    dbObject.collection("product").insertOne(productData, function (err, rs) {
        if (err) throw err;
        console.log("1 document inserted");
    });
    res.send("product added successfully");
});


// -----> http://localhost:4040
var server = expressObject.listen(4040, function () {
    console.log('Node server is running..');
});