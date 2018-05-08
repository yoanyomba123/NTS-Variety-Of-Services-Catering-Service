// import necessary packages
var express = require("express");

// define express router
var router = express.Router();


/*
@route GET order/
@description  tests get access
@access       public
*/
router.get("/main/home", (request, response){
    response.json({
        msg: " Home page access works"
    });
});

module.exports = router;
