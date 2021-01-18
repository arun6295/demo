const router = require('express').Router();
const bodyParser = require('body-parser');
const bycrypt = require('bcryptjs');
const {check,validationResult} = require('express-validator');
const user = require('../models/user');

//middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended:true }));

//router goes here
router.all(
    '/',function(req,res){
        return res.json({
            status:true,
            message:'user controller working....'
        });
    }
);

//create new user
router.post(
    '/createNew',
    [
        //check not empty fields
        check('username').not().isEmpty().trim().escape(),
        check('password').not().isEmpty().trim().escape(),
        check('email').isEmail().normalizeEmail()
    ],
    function(req,res){
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({
                status:false,
                message:'form validation error',
                errors:errors.array()

            });
        }
        //hash password
        const hashedPassword=bycrypt.hashSync(req.body.password,10);
        //create variable for user module
        var temp=new user({
            username:req.body.username,
            email:req.body.email,
            password:hashedPassword
        });

        //insert into data using save method

        temp.save(function(error,result){
            if(error){
                return res.json({
                    status:false,
                    message:'db connection fail',
                    error:error
                });

            }
            //ok
            return res.json({
                status:true,
                message:'Sucess....',
                result:result
            });
        });
    }
);

//find the document from database
router.get(
    '/allData',
    function(req,res){
        user.find(function(error,result)
        {
            if(error){
                return res.json({
                    status:false,
                    message:'data not available',
                    error:error
                });
             }
            //ok
            return res.json({
                status:true,
                message:'sucess....',
                result:result

        });
    });

    
});

//find the document from database

router.get(
    '/find/:email',
    function(req,res){
        user.find({email:req.params.email},{password:0},function(error,result){
            if(error)
            {
                return res.json({
                    status:false,
                    message:'data not available',
                    error:error
                    
                });

             }
            return res.json({
                status:true,
                message:'success....',
                result:result

            });
     
    });

});

module.exports=router;

