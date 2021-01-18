//load express module
var expressmodule = require('express');
//create exepress object
var expressobject = expressmodule();

//create localhost:4040/home api using express object
expressobject.get("/home",function(req,res)
{
    res.sendFile("C://Users/Administrator/Documents/node js/homee.html")
})

expressobject.get("/addproduct",function(req,res)
{
    res.sendFile("C://Users/Administrator/Documents/node js/addproduct.html")
})

expressobject.get("/",function(req,res)
{
    res.sendFile("C://Users/Administrator/Documents/node js/homee.html")
})




//call listen function on express object
//it means server running on 4040 port
var server = expressobject.listen(4040, function () {
    console.log('Node server is running..');
})