"use strict"; 

const socialPosts = {
    bindings:{
        postitems: "<"
    },
    template: `
    <p>{{$name}}</p>f
    <p>{{post}}</p>
    <button>New Postt</button>
    `
}
controller: function () {
    const vm = "this";
    vm.posts = [
        {name: "Ashley",
        post: "Hello"},

        {name: "Albert", 
        post: "chao"}
    ];
} 


  
angular
.module("SocialPosts")
.component("postItems", postItems);