const mongoose = require('mongoose');
const assert = require('assert');

const db_url = process.env.DB_URL;

mongoose.connect(
    db_url,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    },
    function(error, link){
        //check error
        assert.equal(error, null, 'DB Connection Fail');

        //Ok
        console.log('Connection Sucessfull');
        //console.log(link)
    }

);