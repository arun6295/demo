const Customer=require("../model/customer.model.js");

exports.create=(req,res)=>
{
    if(!req.body)
    {
        res.status(400).send({
            message:"content should not be empty"
        });

    }
    //create a customer   //object is created.
    const customer=new Customer(
        {
            email:req.body.email,
            name:req.body.name,
            active:req.body.active
        });
        //save customer in db
        Customer.create(customer,(err,data)=>{
            if(err)
            {
                res.status(500).send({
                    message:
                     err.message||"some error occured while creating customer"
                });
            }
            else res.send(data);
        });

};

exports.findAll=(req,res)=>{
 Customer.getAll((err,data)=>{
        if(err)
         res.send(500).send({
             message:
              err.message|| "some error while retrieving data"
         });
        else res.send(data);
    });
};


exports.findOne=(req,res)=>
{
    Customer.findById(req.params.id,(err,data)=>{
        if(err){
            if(err.kind==="not_found"){
                res.status(404).send({
                    message: `not found customer with id ${req.params.id}.`
                });
            
            }
            else{
                res.status(500).send({
                    message:`error retrieving with id ${req.params.id}.`
                });
            }

        }
        else res.send(data);
    });
}

exports.update=(req,res)=>
{
    if(!req){
        res.status(404).send({
            message:'content cannot be empty'
        });
    }

    Customer.updateById(req.params.id,new Customer(req.body),(err,data)=>{
        if(err){
            if(err.kind==="not_found"){
                res.status(404).send({
                    message: 'not found customer with id ${req.params.customerId}.'
                });
            
            }
            else{
                res.status(500).send({
                    message:"error updating with id"+req.params.id
                });
            }

        }
        else res.send(data);
    });
}

exports.delete=(req,res)=>{
    Customer.removeById(req.params.id,(err,data)=>{
        if(err){
            if(err.kind==="not_found"){
                res.status(404).send({
                    message: 'not found customer with id ${req.params.customerId}.'
                });
            
            }
            else{
                res.status(500).send({
                    message:"error deleting with id"+req.params.id
                });
            }

        }
        else res.send({message:'customer is deleted succesfully'});

    });
}

exports.deleteAll=(req,res)=>{
    Customer.removeAll((err,data)=>{
        if(err){
            res.status(500).send({
                message:"Error deleting data"
            });
        }
        else res.send({message:'all customers deleted successfully'});
    });
}