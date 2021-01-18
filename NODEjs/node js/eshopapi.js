var mc=require('mongodb');
mo=mc.MongoClient;
var url = "mongodb://localhost:27017/eshop";
var dbobject;

var expr = require('express');
var app = expr();

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mo.connect(url, function(err, connection) {
    if (err) throw err;
    console.log("Database created!");
    //create database object
    dbobject = connection.db("eshop");

      });
      

app.get('/getproducts', function (req, res) {
   //connect database and get data.
   var productList;
   dbobject.collection("product").find({}).toArray(function(err, result) {
    if (err) throw err;
   
    productList=result;
    console.log(productList);
    res.send(productList);
   });
  
    

});
app.get('/getproduct/:pid', function (req, res) {
    console.log(req.params.pid);
    var pro = { proid: req.params.pid };
    console.log(pro);apitest
    dbobject.collection("product").deleteOne(pro, function (err, result) {
        if (err) throw err;
        res.send(pro);
    });
});

app.put('/editproduct', function (req, res) {
    var productData = { proid: req.body.pId };
    console.log(req.body.pId);
    var newval = { $set: { proid: req.body.pId, proname: req.body.pName, proprice: req.body.pPrice } };
    dbobject.collection("product").updateOne(productData, newval, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
    });
    res.send("product added successfully");
});

app.post('/addproduct', function (req, res) {
    
    var productdata = { proid: req.body.pid, proname: req.body.pname, proprice:req.body.pprice };
    console.log(req.body.pid);
        //create database object
       
    dbobject.collection("product").insertOne(productdata, function(err, rs) {
            if (err) throw err;
            console.log("1 document inserted");
            
          });
          res.send("added");
          
    });

var server = app.listen(4060, function () {
    console.log('Node server is running..');
})