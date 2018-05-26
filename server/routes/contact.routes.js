// import necessary packages
var express = require("express");
const sendmail = require("sendmail")(); // define express router
var router = express.Router();

/*
@route GET main/Contact
@description  tests get access
@access       public
*/
router.post("/Email", (request, response) => {
  console.log("EMAIL SERVICE FOLK");
  // Use Smtp Protocol to send Email
  const emailFrom = request.body.email;
  const subject = request.body.subject;
  const msg = request.body.message;
  console.log(request.body);
  // send an email
  sendmail({
    from: emailFrom,
    to: "yoanyombapro@gmail.com",
    subject: subject,
    html: msg
  })
    .then(response.json({ result: true }))
    .catch(error => response.status(404).json({ errors: error }));
});

module.exports = router;
