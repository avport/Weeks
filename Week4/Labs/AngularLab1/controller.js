"use strict"; 
function TodoController () { 
    const vm = this; 
    vm.tasks = [
    {taskname: "Buy food", 
    completestatus: false}, 
   
    {taskname: "Paint nails", 
    completestatus: false}, 

    {taskname: "Look up work schedule", 
    completestatus: true},

    {taskname: "Buy birthday present", 
    completestatus: true},
    ];
}
angular
    .module("TodoApp")
    .controller("TodoController", TodoController); 

