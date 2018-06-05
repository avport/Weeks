"use strict";

angular
  .module("GCApp")
  .config(($routeProvider) => {
    $routeProvider
      .when("/items", {
        template: `<items></items>`
      })
  });