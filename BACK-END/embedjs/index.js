var express=require('express');
var app=express();

//set EJS as templating engine
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    //render method takes name of html
    //page to be rendered as input
    //views folder //root dir
    var data={name:'arun',
hobbies:['cricket','football','baseball','chess']}
res.render('home',{data:data});
});
var server=app.listen(4000,function(){
    console.log("port liten 4000");
});