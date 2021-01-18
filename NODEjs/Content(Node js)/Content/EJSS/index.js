
// Set express as Node.js web application 
// server framework. 
// To install express before using it as 
// an application server by using  
// "npm install express" command. 
var express = require('express'); 
var app = express(); 
  
// Set EJS as templating engine 
app.set('view engine', 'ejs'); 

app.get('/', (req, res)=>{ 

// The render method takes the name of the html 
// page to be rendered as input. 
// This page should be in views folder  
// in the root directory 
var data = {name:'arun', 
    hobbies:['playing football', 'playing chess', 'cycling']} 
  
res.render('home', {data:data}); 
});  

var server = app.listen(4000, function(){ 
    console.log('listining to port 4000') 
});