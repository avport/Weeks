"use strict"; 

const get = {

    template: `
      
        <p>Username: {{ $ctrl.userData.username }}</p>
        <p>Password: {{ $ctrl.userData.password }}</p>
    `,
    controller: ["DataService", function(DataService) {
        const vm = this; 
      
            vm.userData = DataService.receiveUserInfo(); 
     
    }]
}; 

angular
    .module("app")
    .component("get", get); 