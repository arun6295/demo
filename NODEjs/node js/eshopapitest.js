var mongodbModule = require('mongodb');
mongoDbObject = mongodbModule.MongoClient();

var expressModule = require('express');
var expressObject = expressModule();

var url = "mongodb://localhost:27017/testing";
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
    console.log("Database created!");
    //create database object
    //useUnifiedTopology:true
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

//delete
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
});

expressObject.post('/addproduct', function (req, res) {
    var productData = { proid: req.body.pid,
         proname: req.body.pname, proprice: req.body.pprice };
    console.log(req.body.pid);
    dbObject.collection("product").insertOne(productData, function (err, rs) {
        if (err) throw err;
        console.log("1 document inserted");
    });
    res.send("product added successfully");
});



var server = expressObject.listen(4070, function () {
    console.log('Node server is running..');
});
