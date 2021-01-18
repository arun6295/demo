module.exports=app=>
{
    const customers=require('./controllers/customer.controller.js');
    //create a customer
    app.post("/customers",customers.create);

    //retrieve aa customers

    app.get("/customers",customers.findAll);

    //retrieve a single customer with cid

    app.get("/customers/:id",customers.findOne);

    //update a customer with cid

    app.put("/customers/:id",customers.update);

    //delete by id

    app.delete("/customers/:id",customers.delete);

    //delete all

    app.delete("/customers",customers.deleteAll);




}

