var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5e0ae89737a288",
      pass: "1855bd045853c5"
    }
  });

  const mailOptions = {
    from: 'elonmusk@tesla.com',
    to: 'to@email.com',
    subject: 'Please check attchemnt',
    html: '<h1>Have the most fun you can in a car!</h1><p>Get your <b>Tesla</b> today!</p>',
    attachments: [
        { // Use a URL as an attachment
          filename: 'your-testla.png',
          path: 'https://media.gettyimages.com/photos/view-of-tesla-model-s-in-barcelona-spain-on-september-10-2018-picture-id1032050330?s=2048x2048'
      }
    ]
};


transport.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });