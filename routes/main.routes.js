// import necessary packages
var express = require("express");

// define express router
var router = express.Router();


/*
@route GET main/home
@description  tests get access
@access       public
*/
router.get("/home", (request, response)=>{
    response.sendFile('index.html', { root: './public' });
});


/*
@route       GET main/about
@description test get access to about page
@access      public
*/
router.get("/about", (request, response)=>{
    response.json({
        msg: "About page access works"
    });
});

/*
@route       GET main/events
@description test get access to events page
@access      public
*/
router.get("/events", (request, response)=>{
    response.json({
        msg: "Events page access works"
    });
});

/*
@route       GET main/venue
@description test get access to venue page
@access      public
*/
router.get("/venue", (request, response)=>{
    response.json({
        msg: "Venue page access works"
    });
});


/*
@route       GET main/reservation
@description test get access to contact page
@access      public
*/
router.get("/reservation", (request, response)=>{
    response.json({
        msg: "Reservation page access works"
    });
});

/*
@route       GET main/contact
@description test get access to contact page
@access      public
*/
router.get("/contact", (request, response)=>{
    response.json({
        msg: "Contacts page access works"
    });
});

module.exports = router;
