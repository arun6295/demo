// init code

const router = require('express').Router();

const bodyParser = require('body-parser');

const bcrypt = require('bcryptjs');

const {check, validationResult} = require('express-validator');

const user = require('./../models/user');


//middleware setup
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended:true }));


//create new user
router.post(
    '/createNew', 
    [
        //check not empty fields
        check('username').not().isEmpty().trim().escape(),
        check('password').not().isEmpty().trim().escape(),
        check('email').isEmail().normalizeEmail()
    ],
    function(req, res){
       const errors = validationResult(req);
       if(!errors.isEmpty()){
        return res.status(422).json({
            status:false,
            message:'Form Validataions error.',
            errors : errors.array()
         });
       }

       // Hash Passeord

       const hashedPassword = bcrypt.hashSync(req.body.password,10);

       //return res.json({
        //status:true,
        //message:'User Data Ok.',
        //data : req.body,
        //hashedPassword: hashedPassword
        //});

        /*user.create(
            {
                username : req.body.username,
                email : req.body.email,
                password : hashedPassword
            },
            function(error , result){
                if(error){
                    return res.json({
                        
                        status:false,
                        message:'Db COnnection Fail',
                        error:error

                    });
                }
                 
                //Ok 
                return res.json({
                        
                    status:true,
                    message:'Success...',
                    result:result

                });

            }
        );*/

        //Create variable for user module
        var temp = new user({
            username : req.body.username,
            email : req.body.email,
            password : hashedPassword
        });

        //insert into data using save metnod
        temp.save(function(error, result){

            if(error){
                return res.json({
                    
                    status:false,
                    message:'Db COnnection Fail',
                    error:error

                });
            }

             //Ok 
             return res.json({
                        
                status:true,
                message:'Register Successfully...',
                result:result

            });

        });
    }
 );
