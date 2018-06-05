"use strict";
//blur and focus events 
//every input has course so have access to whole object, including id 
const cartItems = {
  // TODO: Create a template to display all the students from this class
  template: `
<section class = "cards" ng-repeat = "item in $ctrl.cartItems">
  <input class = "input" ng-blur = "$ctrl.updateItem(item);" ng-model = "item.product">
  <input class = "input" ng-blur = "$ctrl.updateItem(item);" ng-model = "item.price">
  <input  class = "input" ng-blur = "$ctrl.updateItem(item);" ng-model = "item.quantity"> 
  <a id = "deletebutton" href="" ng-click = "$ctrl.deleteItem(item.id);">Delete</a>
</section>

<form class = "form" ng-submit = "$ctrl.addItem($ctrl.newItem);">
  <input class = "input" type = "text" placeholder = "Product" ng-model = "$ctrl.newItem.product">
  <input class = "input" type = "text" placeholder = "Price" ng-model = "$ctrl.newItem.price">
  <input class = "input" type = "text" placeholder = "Quantity" ng-model = "$ctrl.newItem.quantity">
  <button id = "additem" >Add Item</button>
</form>
  `,
  controller: ["CartService", function(CartService) {
    const vm = this;
    // TODO: Call the StudentService to retrieve the list of the students
    //make http request for courses, call server 
    //need to make getCourse 
CartService.getAllItems().then((response) => {
// console.log(response); 
//response is an object, data is array, can't ng-repeat an object, must add .data
  vm.cartItems = response.data; 
  }); 
//pass parameter (object) and send to sevice 
//"newCourse" is just a parameter name 
  vm.addItem = (newItem) => {
    console.log(newItem); 
    CartService.addItem(newItem).then((response) => {
      
      vm.cartItems = response.data; 
    }); 
//reset input fields 
    vm.newItem = {}; 
  }; 
  vm.deleteItem = (id) => {
    // console.log(id); 
    // console.log(typeof id); 
    CartService.deleteItem(id).then((response) => {
      console.log(id);
      vm.cartItems = response.data; 
    }); 
  }; 
  vm.updateItem =(item) => {
    CartService.updateItem(item).then((response) => {
      console.log(item); 
      vm.cartItems = response.data; 
    });
  };


}]
};

angular
  .module("GCApp")
  .component("cartItems", cartItems);