// import necessary packages
var express = require("express");

// define express router
var router = express.Router();


/*
@route GET main/home
@description  tests get access
@access       public
*/
router.get("/main/home", (request, response)=>{
    response.json({
        msg: " Home page access works"
    });
});


/*
@route       GET main/about
@description test get access to about page
@access      public
*/
router.get("/main/about", (request, response)=>{
    response.json({
        msg: "About page access works"
    });
});

/*
@route       GET main/events
@description test get access to events page
@access      public
*/
router.get("/main/events", (request, response)=>{
    response.json({
        msg: "Events page access works"
    });
});

/*
@route       GET main/venue
@description test get access to venue page
@access      public
*/
router.get("/main/venue", (request, response)=>{
    response.json({
        msg: "Venue page access works"
    });
});


/*
@route       GET main/reservation
@description test get access to contact page
@access      public
*/
router.get("/main/reservation", (request, response)=>{
    response.json({
        msg: "Reservation page access works"
    });
});

/*
@route       GET main/contact
@description test get access to contact page
@access      public
*/
router.get("/main/contact", (request, response)=>{
    response.json({
        msg: "Contacts page access works"
    });
});

module.exports = router;
