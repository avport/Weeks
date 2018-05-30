"use strict"; 

const setProfile = {

    template: `
    <form ng-submit = "$ctrl.signUp($ctrl.user);">
    <input type = "text" placeholder = "username" ng-model = "$ctrl.user.username">
    <input type = "text" placeholder = "password" ng-model = "$ctrl.user.password">
    <button>sign up</button>
    </form>
    `,

    controller: ["profileService", function(profileService) {
        const vm = this; 
        vm.signUp = (user) => {
            profileService.sendUserInfo(user);
        }; 
    }]
}; 

angular
    .module ("app")
    .component("add", add); 