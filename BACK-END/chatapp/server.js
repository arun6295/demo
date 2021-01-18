var express=require('express');
var app=express();
var server=require('http').Server(app);
var io=require('socket.io')(server);

//tell express where to server static files from

app.use(express.static(__dirname+'/public'));

server.listen(9000);
console.log("running on 9000");

//allow cors

app.all('*',function(req,res,next)
{
    res.header("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Access-Token, Content-Type, Accept,X-Key");
    if(req.method=='OPTIONS'){
        res.status(200).end();
    }else{
        next();

    }
   
    
});

app.get('/',function(req,res){
    res.sendfile("index.html");
});

io.on('connection',function(socket){
    socket.on('chat message',function(msg){
        io.emit('chat message',msg);
    });
});

