const bodyParser = require('body-parser');
const express=require('express');
const app=express();
//const bodyParser=require('body-parser');
const port=process.env.PORT||4001;

//require("./customers.routes.js")(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

require("./customers.routes.js")(app);

app.get("/",(req,res)=>
{
    res.json({message:'welcome'});
});
app.listen(port,function()
{
    console.log("connected at port :"+port);
});