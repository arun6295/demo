const sql=require("../db.js");
/*const dbConfig=require('../dbconfig.js');
var db=dbConfig.DB
var dbo=db.replace(/\'/gi,'')
console.log(dbo);*/

//constructor

const Customer=function(customer){
    this.email=customer.email;
    this.name=customer.name;
    this.active=customer.active;
   
};

//insert data to database mysql via postman.
Customer.create=(newCustomer,result)=>{
    sql.query("INSERT INTO today.order SET ?", newCustomer,(err,res)=>{
        if(err){
            console.log("error",err);
            result(err,null);
            return;
        }
        console.log("created customer",{id:res.insertId, ...newCustomer});
        result(null,{id:res.insertId, ...newCustomer});
    });
};

Customer.getAll=result=>{
    sql.query("SELECT * FROM today.order",(err,res)=>
    {
        if(err){
            console.log("error:",err);
            result(null,err);
            return;
        }
        console.log("customers:",res);
        result(null,res);
    });
};


Customer.findById=(id,result)=>{
    sql.query("SELECT * FROM today.order WHERE id=?",[id],(err,res)=>
    {
        if(err){
            console.log("error:",err);
            result(null,err);
            return;
        }
        if(res.length){
            console.log("found customer",res[0]);
            result(null,res[0]);
            return;
        }
        //not found with id
        result({kind:"not_found"},null);
    });
};


Customer.updateById=(id,customer,result)=>
{
    sql.query("UPDATE today.order SET email=?,name=? WHERE id=?",
    [customer.email,customer.name,id],(err,res)=>{
        if(err){
            console.log("error:",err);
            result(null,err);
            return;
        }
        if(res.affectedRows==0){
            //not found cust with id
            result({kind:"not_found"},null);
            return;
        }
        console.log("updated customer:",{id:id, ...customer});
        result(null,{id:id,...customer});
    });
}

Customer.removeById=(id,result)=>
{
    sql.query("DELETE FROM today.order WHERE id=?",[id],(err,res)=>{
        if(err){
            console.log("error:",err);
            result(null,err);
            return;
        }
        if(res.affectedRows==0){
            //not found cust with id
            result({kind:"not_found"},null);
            return;
        }
        console.log("delete with customer id",id);
        result(null,res);

    });
}
Customer.removeAll=(result)=>{
    sql.query("DELETE FROM today.orders",(err,res)=>{
        if(err){
            console.log("error:",err);
            result(null,err);
            return;
        }
        console.log('deleted',res.affectedRows)
        result(null,res);

    });
};

module.exports=Customer;
