"use strict";
function CartService($http) {
  // Declare the functions to make GET, POST, PUT, and DELETE requests from this service.
  const getAllItems = () => {
    return $http({
      method: "GET", 
      url: "/portal/cart-items"
    }); 
  }; 
//we want course.id because we want to access the entire object 
  const updateItem = (item) => {
    // console.log(item.id);
    return $http({
      method: "PUT", 
      url: "/portal/cart-items/" +item.id, 
      data: item
    }); 
     
  };


  const deleteItem = (id) => {
    console.log(id); 
    // console.log(typeof id); 
    return $http({
      method: "DELETE", 
// the id references a parameter 
//need ending / because adding id to end 
      url: "/portal/cart-items/" + id 
    }); 
  };

  const addItem = (newItem) => {
    console.log(newItem); 
    return $http ({
      method: "POST", 
      url: "/portal/cart-items", 
      data: newItem
    }); 
  };

  return {
    getAllItems,
    addItem, 
    deleteItem,
    updateItem
  };
}

angular
  .module("GCApp")
  .factory("CartService", CartService);