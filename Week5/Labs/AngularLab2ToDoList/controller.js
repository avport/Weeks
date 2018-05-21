"use strict";

function TodoController() {
    const vm = this;
    vm.tasks = [{
        taskname: "hello",
        completestatus: false
    }];

    vm.addTask = (taskname) => {
        vm.tasks.push({
            taskname: taskname,
            completestatus: false
        });

        vm.tasks.taskname = "";
        console.log(vm.tasks);
    }

    vm.removeTask = (index) => {
        console.log(index);
        vm.tasks.splice(index, 1);
    };

    vm.completeTask = (index) => {
        vm.tasks[index].completestatus = true;
    };
}

angular
    .module("TodoApp")
    .controller("TodoController", TodoController);