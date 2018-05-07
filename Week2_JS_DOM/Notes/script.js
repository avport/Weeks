"use strict"; 

//HOW MANY POINTS DID YOU GET
// let question = prompt ("how many points did you get?")
// let score = (`You scored ${(question /10)*100}%`); 
// console.log(score); 

// if (question >6) {
//     console.log ("pass"); 
// } else {
//     console.log ("fail"); 
// }

//LONGEST NAME
// let name1 = prompt ("What is the first name?"); 
// let name2 = prompt ("What is the second name?"); 

// if (name1.length > name2.length) {
//     console.log (name1); 
// } else {
//     console.log (name2); 
// }


//FOR LOOP

// for (let i=1; i<=20; i++) {
// console.log(i); 
// }

// for (let i=1; i<=20; i++) 
//     if (i%2 ===0) {
//     console.log(i); 
//     }


//WHILE LOOP
// let i=10; 
// while (i<=17) {
//     console.log (`You are ${i} years old!`); 
//     i++
// }
// console.log("You are an adult"); 

//DO WHILE LOOP
// let i=1; 
// do {
//     i++
//     console.log(i); 
// }
//     while (i<=10);


//FOR..OF LOOP - use for arrays
// let languages = ["Java", "JavaScript", "Ruby", "Python", "C#", "PHP", "HTML", "CSS"];
// for (let language of languages) {
// console.log(language);
// }

//FIZZBUZZ

//3-fizz, buzz-5, fizzbuzz-15, none-number

// let number = 0; 
// while (number <=50) {
//  number++; 

// if (number % 15 ===0) {
//     console.log ("fizzbuss"); 
// } else if (number % 3 === 0) {
//     console.log ("fizz");
// } else if (number % 5 === 0) {
//     console.log ("buzz"); 
// } else {
//     console.log (number); 
// }
// }


//FUNCTION DECLARAION 
// function area (width, height) {
//     console.log(width*height);
// }
// area(4, 5); 

//FUNCTION EXPRESSION 
// let area = function (width, height) {
//     console.log(width * height); 
// }
// area (3,5); 

//ARROW FUNCTION 
// let area = (width, height) => {
//     console.log(width * height); 
// }
// area (5,7); 


// //CLOSURE
// function sayHello(name) {
//     let greeting  = function(message) {
//         return `${message} ${name}?`;
//     }
//     return greeting;
// }

// let hiAdam = sayHello("Adam");

// hiAdam =
// function(message) {
//     return `${message} Adam?`;} 

// console.log(hiAdam("How are you"));
// How are you Adam? 


//     // function sayHello(name) {
//     //     let greeting  = "potato"
//     //     return greeting;
//     // }
//     // let hiAdam = sayHello("Adam");
//     // hiAdam="potato"


//     function sayHello(name) {
//         let greeting  = `${message} ${name}`
//         return greeting;
//     }
//     let hiAdam = sayHello("Adam");
//     // hiAdam = `${message} Adam`


// let dog = function(name){
//     console.log(`my dog is named ${name}`)
// }

// function dog(name){
//     console.log(`my dog is named ${name}`)    
// }

// dog(name);
//     // let hiYasmine = sayHello("Yasmine");
//     // console.log(hiYasmine("How are you"));



    // let currentUser = {
    //     name: "Charlene",
    //     position: "Program Manager"
    //     }
    //     console.log(currentUser.name); // "Charlene"
    //     console.log(currentUser["position"]); 
    //     console.log(currentUser.position);
    //     delete currentUser.position;
    //     console.log (currentUser); 


    //CLASS
    // class Student {
    //     constructor(name, age){
    //       this.name = name;
    //      this.age = age;
    //     }
    //     sayHello() {
    //     console.log("Hello, front-end!");
    //     }
    // }
    //   let tSwift = new Student("Taylor Swift", 30);
    //   console.log(tSwift);
    //   tSwift.sayHello();
  
// class FrontEndStudent extends Student {
// constructor(name, age) {
// super();
// this.name = name;
// this.age = age;
// }

// sayHello() {
//     console.log(`Nice to meet you. My name is ${this.name}.`);
//     }

// }
// let tSwift = new FrontEndStudent("Taylor Swift", 30);
// tSwift.sayHello();

// class Person {
//     constructor(name) {
//     this.name = name; 
//     } 
//     eat () {
//         console.log ('Nom'); 
//     }
//     speak() {
//         console.log (`${this.name} says hi`); 
//     }
// }


// let aPort = new Person ("Ash", 31);
// console.log(aPort); 
// aPort.eat(); 
// aPort.speak(); 

// class Student extends Person {
//     constructor (name) {
//         super(); 
//         this.name = name; 
//     }
//     speak() {
//         console.log (`${this.name} says hello`); 
//     }
// }
// let aTom = new Student ("Albert", 33); 
// console.log(aTom); 
// aTom.speak(); 



