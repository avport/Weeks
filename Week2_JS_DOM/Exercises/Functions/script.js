"use strict"; 

// function greetClass() {
//     console.log("Hello class!!!");
//     }
//     greetClass();


// function calculateArea(length, width) {
//     console.log(length * width);
//     }
//     calculateArea(10, 5); // 50


//function declaration 

// function hello (guest){
//     console.log (`Welcome to class ${guest}`)
// }
// hello ("Ashley"); 
// hello ("Anna"); 
// hello("Ella"); 



// const myInfo = function (age, food) {
//     console.log (`I am ${age}. My favorite food is ${food}`); 
// }
// myInfo (31, "salad"); 


// const myInfo = function (age, food) {
//     console.log (`${age} ${food}`);
// }
// myInfo (31, "salad"); 


// const fizzBuzz = function(num) {
//     console.log(num); 
//     if (num % 15 ===0) {
//         console.log (`${num} is fizzbuzz.`); 
//     } else if (num % 5 ===0) {
//         console.log (`${num} is buzz.`); 
//     } else if (num % 3 === 0) {
//         console.log (`${num} is fizz.`); 
//     } 
// };

// for (let i=9; i<=2000; i++) {
//     fizzBuzz(i); 
// }
//  function tempConvert (temp, tempUnit) {
//   if (tempUnit ==="F") {
//       console.log (`${temp} C is ${Math.floor((temp * (9/5) + 32))} degrees F`); 
//    } else if (tempUnit === "C") {
//        console.log (`${temp} F is ${Math.floor((temp -32) * (5/9))} degrees C`);
//    }
//  }
// //  tempConvert (100, "C"); 
// //  tempConvert (40, "F"); 



// const feedDogs = (dog1, dog2) => {
//     return `${dog1} and ${dog2} are now fed.`;
//     };
//     console.log(feedDogs("Ringo", "Syntax"));

// const clothesPicker = (eventType, temp) => {
//     let eventOutfit = eventType;
//     let eventTemp = temp; 

//     if (eventOutfit === "casual") {
//           eventOutfit = "something comfy"; 
//       } else if (eventOutfit === "semi-formal") {
//         eventOutfit = "a polo"; 
//       } else if (eventOutfit === "formal") {
//         eventOutfit = "a suit"; 
//       }

//       if (eventTemp <=54) {
//           console.log (`${eventOutfit} a coat`); 
//       } else if (eventTemp >54 && eventTemp <70) {
//           console.log (`${eventOutfit} a jacket`); 
//       } else if (eventTemp >= 70) {
//           console.log (`${eventOutfit} no jacket`); 
//       }
//   }
    

// clothesPicker("casual", 90); 
// //something comfy, no jacket
// clothesPicker("formal", 20); 
// // a suit, a coat

// Function declaration 
// function area (width, height) {
// console.log (width * height) 
// }
// area (5, 4); 


// Function Expression 
const area = function (length, width) {
    return length * width; 
}
area(5, 4); 

// Arrow function 
// const area = (width, height) => {
//     return (width * height); 
// }; 
// console.log(area(5, 4)); 


// function isEven(num) {
//     if (num % 2 === 0) {
//     console.log(true);
//     } else {
//     console.log(false);
//     }
//     }
//     isEven(4);


// const feedDogs = (dog1 = "Ringo", dog2) => {
//     return `${dog1} and ${dog2} are now fed.`;
//     };
//     console.log(feedDogs(undefined, "Syntax")); 

// let name = "Ashley"; 
// name.split (" "); 


// const userList = ["Anna", "Josh", "Kim", "Yasmine"];
// function processList() {
// console.log(userList);
// const newUser = "Adam";
// }
// processList();
// console.log(newUser);
 

// function sayHello(name) {
//     let greeting = function(message) {
//     return `${message} ${name}?`;
//     }
//     return greeting;
//     }

//     let hiAdam = sayHello("Adam");
//     console.log(hiAdam("How are you"));

//     let hiYasmine = sayHello("Yasmine");
//     console.log(hiYasmine("How's it going"));

//     let hiDavid = sayHello("David");
//     console.log(hiDavid("Good to see you"));


var newUser = "Adam";
function processList() {
    console.log(newUser);
    if (true) {
    var newUser = "Yasmine";
}
}
processList(); 