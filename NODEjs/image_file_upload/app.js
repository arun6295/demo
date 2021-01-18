const express=require('express');
const multer=require('multer');

var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'today'
});

con.connect(function(err)
{
    if(err) throw err;
    console.log("db connecetd");
});


const path=require('path');
const helpers=require('./helpers');
const app=express();

const port=process.env.PORT|| 5002;
app.use(express.static(__dirname+ '/public'));
global.fname='';
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'uploads/');
    },
    //by default multer removes file extensions,so we have to add back
    filename:function(req,file,cb){
        cb(null,file.fieldname+'_'+Date.now()+path.extname(file.originalname));
        fname=file.fieldname;
       // console.log(fname);
  
    }
});

app.post('/upload-profile-pic',(req,res)=>{
    let upload=multer({ storage:storage, fileFilter:helpers.imageFilter }).single('profile_pic');
    upload(req,res,function(err)
    {
        //req.file contains information bout file upload.
        if(req.fileValidationError){
            return res.send(req.fileValidationError);
        }
        else if(!req.file){
            return res.send("please select an image to upload ")
        }
        else if(err instanceof multer.MulterError){
            return res.send(err);
        }
        res.send('<hr/> <a href="./">upload another image');
    });
    console.log("img name:",fname);

   /*var data={
       name:`$fname`,
       address:'mi'
   }
   // console.log(req.body.fieldname)
    con.query("INSERT INTO today.customer ?",data,function(err,res)
    {
        if(err) throw err;
        console.log("inserted")

    }); */
});

app.listen(port,()=>console.log("port runing at :",port));

