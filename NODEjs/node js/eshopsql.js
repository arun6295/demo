var expressModule=require('express');
var expressObject=expressModule();

var bodyParser=require('body-parser');
expressObject.use(bodyParser.urlencoded({extended:false}));
expressObject.use(bodyParser.json());


var mysql=require('mysql');
var con=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'root',
        database:'today'
    }
);

con.connect(function(err)
{
    if(err) throw err;
    console.log("connected");
});


//get data from mysql
var data;
expressObject.get('/getdata',function(req,res)
{
    con.query("SELECT * FROM customers",function(err,result)
    {
        if(err) throw err;
        data=result;
        console.log(data);
        res.send(data);
        console.log("data selected");

    });
});

expressObject.post('/addData',function(req,res)
{
    /*const data= 
    
        {name:req.body.nam,address:req.body.addres}*/
    var data_up=
    [
    
        [req.body.name,req.body.address]
    ];
    
    console.log(data_up);
    
        console.log(req.body.nam);
        //console.log(data);
    
    con.query("INSERT INTO customers (name,address) VALUES ?",[data_up],function (err, result,fields) {
            if (err)
                throw err;
            console.log("data inserted");
        });
    res.send("product added successfuly");
    
})
//edit remaining
expressObject.put('/editdata',function(req,res)
{
    var edit=[req.body.name]
    console.log(edit);
    var  uname=
    [
        
       
        [req.body.name,req.body.address]
    ]
    
    con.query("update customers set address='ola' where name= ?",[edit],function(err,result)
    {
        if(err) throw err;
        console.log("data edited");
        console.log(result);
    });

})

expressObject.get('/deletedata/:name',function(req,res)
{
    var del=[req.params.name]
    console.log(del);
    con.query("DELETE FROM customers WHERE name= ?",[del],function(err,result,fields)
    {
        if(err) throw err;
        var deldata=result;
        console.log(deldata);
    })

})

var server=expressObject.listen(5000,function()
{
    console.log("connected to 5000");
});