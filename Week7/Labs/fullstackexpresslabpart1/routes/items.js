"use strict";
// TODO: Require Express
const express = require("express"); 
// TODO: Declare a Router object to handle the routes for our courses
const itemRouter = express.Router(); 

//array of objects we send to front end 
const cartItems = [
  {
    product: "Ice Cream",
    price: "3.50",
    quantity: "10", 
    id: 0
  },
  {
    product: "Salad",
    price: "10.00",
    quantity: "1", 
    id: 1
  },
  {
    product: "Brownie",
    price: "3.00",
    quantity: "2", 
    id: 2
  }
];

let idCount = 3; 
// TODO: Create four separate routes, one for each method
//"courses" is arbitrary here. this is just the result of this file 
itemRouter.get("/cart-items", (req, res) => {
//this 'courses' is the array 
  res.send(cartItems);
});

itemRouter.post("/cart-items", (req, res) => {
  //this 'courses' is the array, push into array and send to service, send to component  
  // console.log(req.body); 
   cartItems.push ({
     product: req.body.product, 
     price: req.body.price, 
     quantity: req.body.quantity,
     id: idCount++
   })
   res.send(cartItems); 
  });

itemRouter.delete("/cart-items/:id", (req, res) => {
  // console.log(req.params.id); 
  // console.log(typeof req.params.id); 
  for (let item of cartItems) {
    if(item.id == req.params.id) {
//courses array 
//how many elements removed 
      cartItems.splice(cartItems.indexOf(item), 1);  
    }
  }
  //this 'courses' is the array, send back updated array 
    res.send(cartItems);
  });

itemRouter.put("/cart-items/:id", (req, res) => {
//this 'courses' is the array 
//combo of for of loop from delete and object from post
  for (let item of cartItems) {
    if(item.id == req.params.id) {
      cartItems.splice(cartItems.indexOf(item), 1, {
        product: req.body.product, 
        price: req.body.price, 
        quantity: req.body.quantity,
        id: item.id
      });  
    }
  }
    res.send(cartItems);
  });

// Export the Router object
module.exports = itemRouter; 