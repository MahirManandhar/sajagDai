try{
"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
module.exports.sendMail=async function sendMail(str,data) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing


  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'guidedtravels.spam@gmail.com', // generated ethereal user
      pass: 'gviryirbfkoracde', // generated ethereal password
    },
  });


  var Osubject,Otext,Ohtml;
  if(str=='signup'){
    Osubject= `Thank you for signing ${data.nam})`;
    Ohtml=`
    <h1>Welcome to GuidedTravels.com/h1>
    Hope you have a good time
    Here are your details-
    Name - ${data.name}
    Email- ${data.email}
    `
  }
  else if(str=="resetpassword"){
    Osubject='Reset Password';
    Ohtml=`
    <h1>GuidedTravels.com/h1>
    Here is your Link to reset your password !
    ${data.resetPasswordLink}
    `
  }
  

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '" Guided Travels 👻" <guidedtravels.spam@gmail.com>', // sender address
    to: data.email, // list of receivers
    subject: Osubject, // Subject line
    // text: "Hello world?", // plain text body
    html: Ohtml, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

}

}

catch(error){
  console.log(error);
}


