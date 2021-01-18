var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("today");
  var myquery = { address: "Canyon 123"};
  var newvalues = { $set: {name: "Mickey", address: "ABC 123" } };
  dbo.collection("user").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});