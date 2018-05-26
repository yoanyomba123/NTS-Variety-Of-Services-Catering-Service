// Specifying Package and Library Imports
var express = require("express");

// make use of the files present in the routes folder for routing
var main = require("./routes/main.routes");
var order = require("./routes/order.routes");
var contact = require("./routes/contact.routes");
// entry point and app initialization
var app = express();

// loading view folder for static files
app.use(express.static(__dirname + "/public"));

// setting up route handlers
app.use("/NTS/main", main);
app.use("/NTS/Email", contact);
app.use("/NTS/order", order);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
