const mongoose=require('mongoose');
const assert=require('assert');
//const db_url=process.env.DB_URL;
const url="mongodb://localhost:27017/mongotest";
//connection establish

mongoose.connect(
    url,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    },
    function(error,link){
        //check error
        assert.equal(error,null,'DB connection fail');

        //ok
        console.log('connection succesfull');

    }
);
