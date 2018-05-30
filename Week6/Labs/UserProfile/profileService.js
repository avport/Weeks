"use strict";

function DataService ($location) {
    let userInfo = {}; 
    const sendUserInfo = (user) => {
    console.log(user); 
    userInfo = user; 
    $location.path("/get");
   }; 

   const receiveUserInfo = () => {
       return userInfo;
   }

   return {
       sendUserInfo,
       receiveUserInfo
   }
 }

angular
    .module("app")
    .factory("DataService", DataService)
