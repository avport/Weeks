"use strict";
// TODO: Require the Express module
const express = require("express"); 
// TODO: Declare app and initialize it to the object returned from calling the Express function
const app = express(); 
// TODO: Require the body-parser module
//can't use hyphen in variable name 
//needed for post and put methods 
const bodyParser = require("body-parser"); 
//file path to module since this is a file we created 
// TODO: Tell our application to use the various routes
//'courses' referrs to routing object exported 
const cartItems = require("./routes/items"); 
//file name is students.routes


// const students = require("./routes/students.routes"); 

// TODO: Tell our application to use body-parser
app.use(bodyParser.json()); 
//portal is prefix to uri, /portal/courses in postman, for example
//'courses' is variable that contains information and is required in file 
//localhost:3000/portal/courses in postman will show the array 
//portal and list are artibrary 
app.use("/portal", cartItems); 
//link to front end, localhost:3000
app.use(express.static(__dirname + "/public")); 

// TODO: Tell our application to use the three modules from the routes folder

// TODO: Declare a 'port' variable that will be initialized to 3000 or 8080 (your choice!)
let port = 8080; 

// TODO: Create the server
app.listen(port, () => console.log(`listening on port ${port}`)); 