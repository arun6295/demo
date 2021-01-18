require('dotenv').config;
const express=require('express');
const morgan=require('morgan');
const cors=require('cors');
const app=express();
const port=process.env.PORT;
const database=require('./database');
const userController = require('./controllers/user');
//middleware setup
app.use(morgan('dev'));
app.use(cors());
app.use('/api/user',userController);

//default routes
app.all(
    '/',function(req,res){
        return res.json({
            status:true,
            message:'Index page working',
        });
    }
);

//server start
app.listen(7000,function(){
    console.log('server running:',7000);
});