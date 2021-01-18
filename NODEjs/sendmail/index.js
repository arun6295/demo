var nodemailer=require('nodemailer');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "bca19beb986e09",
      pass: "5f706f09f7b2b7"
    }
  });

var mailOptions={
    from:'test@gmail.com',
    to:'arun@funlabtech.com',
    subject:'sending mail',
    text:'that was easy'
};

var mailOptions={
    from:'test@gmail.com',
    to:'arun@funlabtech.com',
    subject:'sending mail',
    html:'<h1>attachment</h1>',
    attachments:[
        {
        filename:'image.jpg',
        path:''
        }

    ]
};



transport.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log('email sent:'+info.response);
    }
});