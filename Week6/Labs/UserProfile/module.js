"use strict"; 

angular
    .module("app", ["ngRoute"])
    .config(($routeProvider) => {
        $routeProvider
            .when("/userProfile", {
                template: "<userProfile></userProfile>"
            })
            .when("/editProfile", {
                template: "<editProfile></editProfile>"
            })
            .otherwise ({
                redirectTo:"/userProfile"
            });
    }); 