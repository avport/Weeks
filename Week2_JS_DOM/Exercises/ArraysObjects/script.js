"use strict"; 





//drinks example 
// let drinks = ["Coke", "Coffee", "Sweet tea"];
// for (let i=0; i<drinks.length; i++) {
// console.log(drinks[i]); 
// }


// var animals = ['pigs', 'goats', 'sheep'];


// console.log(animals.push('cows'));
// console.log(animals);



// var array1 = [1, 2, 3];

// // console.log(array1.unshift(4, 5));
// // expected output: 5

// console.log(array1);
// // expected output: Array [4, 5, 1, 2, 3]


// var array1 = [1, 2, 3];

// var firstElement = array1.shift();

// console.log(array1);
// // // expected output: Array [2, 3]

// console.log(firstElement);
// // // expected output: 1



// var months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 2, "pepsi"); 

// console.log(months); 
// months.splice(1, 0, 'Feb');
// // inserts at 1st index position
// console.log(months);
// // expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

// months.splice(4, 1, 'May');
// // replaces 1 element at 4th index
// console.log(months);
// // expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']




// let myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
// let altFish = myFish
// let removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');
// console.log(myFish); 
// console.log(removed); 
// console.log(myFish.length); 
// console.log(removed); 
// myFish is ["parrot", "anemone", "blue", "trumpet", "sturgeon"] 
// removed is ["angel", "clown"]



// let myFriends = ["Rachel", "Sarah"]; 
// myFriends.unshift("Albert"); 
// console.log(myFriends); 



// console.log(favoriteFoods.push('carrots'));
// console.log(favoriteFoods); 

// console.log(favoriteFoods.unshift("pizza")); 
// console.log(favoriteFoods); 

// console.log(favoriteFoods.pop()); 
// console.log(favoriteFoods); 

// console.log(favoriteFoods.shift()); 
// console.log(favoriteFoods);

// let badMovies = ["one", "two", "three", "four"]; 
// badMovies.splice (0, 0, "zero"); 
// console.log(badMovies); 

// badMovies.splice (0, 1, "two"); 
// console.log (badMovies); 
//two, two, three, four

// badMovies.splice (4, 0, "four", "five");
// console.log(badMovies); 
//one, two, three, four, four, five

// badMovies.splice (0, 2);
// console.log (badMovies); 
//three, four



// let favoriteFoods = ["bananas", "carrots", "cake", "chocolate"]; 

// favoriteFoods.push("apples"); 
// console.log(favoriteFoods); 

// favoriteFoods.unshift("grapes"); 
// console.log(favoriteFoods); 


// favoriteFoods.pop(); 
// console.log(favoriteFoods); 

// favoriteFoods.shift(); 
// console.log(favoriteFoods); 

// favoriteFoods.splice(1, 1, "oranges");
// console.log(favoriteFoods); 
//bannas, oranges, cake, chocolate





// let movies = ["DH", "R", "ID", "BB"]; 
// console.log(movies); 
// const removeMovie = (index) => {
//     movies.splice (index, 1);
//     console.log(movies); 
// }; 
// removeMovie(3); 



// let currentUser = {
//     name: "Charlene",
//     position: "Program Manager"
//     }
//     // console.log(currentUser); 
//     // console.log(currentUser.name); 
//     // console.log(currentUser.position); 
//     delete currentUser.position 
//     console.log(currentUser); 




// // console.log (myInfo.phone); 

// // myInfo.firstName = "T-Swift"; 
// // console.log(myInfo); 
// // myInfo.favoriteSaying(); 
// myInfo.increaseAge(); 
// console.log(myInfo); 



// const family = [
//     { name: "joan", relation: "mom"},
//     { name: "dan", relation: "dad"},
//     { name: "Albert", relation: "husband"}
// ]; 
// console.log(family); 

// family.forEach ((x) => {
//     console.log(x.name); 
// }); 

// //for each item in this array we are going to print each item 

// family.forEach((x) => {
//     console.log(x); 
// }); 

// family.forEach((x) => {
//     console.log(x); 
// });

// // family.forEach(function(x) {
// //     console.log(x); 
// // });

// family.forEach((dog) => {
//     dog.age = 5; 
// });
// console.log(family); 

// family.forEach(printDog);
// function printDog(x) {
//     console.log(x);
// }

// for (let i=0; i<family.length; i++) {
//     if (family[i].name === "Albert") {
//         console.log(family[i]);
//     }
// }
// // family[1].age = 1;
// // family.splice (3, 1); 
// // console.log (family); 
// // family [1].age = 1; 
// // family.splice(3, 1); 

// // let i=0
// // while (i<family.length) {

// // }







// for (let i=0; i<20; i++) {
//     console.log (i); 
// }

// let i=0
// while (i<=20) {
//     console.log (i); 
//     i++; 
// }



// const myFamily = ["Ashley", "Albert"]; 
// console.log(myFamily); 

// console.log(myFamily.length); 



// let myFamily = [
//     {name: "Ashley", title: "wife"}, 
//     {name: "Albert", title: "husband"}
// ];
// // console.log(myFamily); 


// console.log(myFamily); 

// const myInfo = {
//     name: "Ashley", 
//     title: "Person"
// };
// delete myInfo. title;
// console.log(myInfo); 



// const myInfo = {
//     age: 31, 
//     firstName: "ashley",
//     lastName: "port",
//     phone: "231-251-5544",
//     favoriteSaying() {
//         console.log(this.firstName  + " you're rediculous");
//     }, 
//     increaseAge() {
//             this.age++; 
//             console.log(this.age); 
//         }
// };




// class Student {
//     constructor (computer, name, shoes, age) {
//         this.computer = computer; 
//         this.name = name; 
//         this.age = age; 
//         this.shoes = shoes; 
//         this.knowledge = 0; 
//     }
//     study() {
//         this.knowledge++; 
//     }
//     goofingOff() {
//         this.knowledge--; 
//     }
// }

// // this gets info and methods from student class to frontendstudent subclass, create prototype
// class FrontEndStudent extends Student {
//   constructor(computer, name, shoes, age) {
//       super(); 
//       this.computer = computer; 
//       this.name = name; 
//       this.age = age; 
//       this.shoes = shoes;  
//       this.languate = "javascript"; 
//       this.classroom = "the balcony"; 
//       this.breaktime = "10:30"; 
//       this.instructor = "Adam"; 
//   }
  
//   coolAsHell() {
//       return true; 
//   }
//   chill() {
//       return true; 
//   }
// }

// const tabb = new FrontEndStudent (true, "Tabb", 30, "running");
// console.log(tabb); 
// tabb.study(); 
// console.log(tabb); 
// console.log("test"); 



// class Person {
//     constructor (name) {
//         this.name = name; 
//     }
//     eat() {
//         console.log ("Nom Nom Nom!"); 
//     }
//     speak() {
//         console.log (this.name + "says hello!"); 
//     }
// }

// class Student extends Person {
//     constructor (name) {
//         super(); 
//         this.name = name; 
//     }
//     speak() {
//         console.log ("A friendly student named" + this.name + "says hello!"); 
// }
// }

// let adam = new Person("Adam");
// adam.eat(); // "Nom Nom Nom!"
// adam.speak(); // "Adam says hello!"
// console.log(adam.name); 


// const john = new Student (true, "john", 26, "boots");

// const elle = new Student (true, "Elle", 24, "boots kind of");
// console.log(john); 
// console.log(elle); 
// john.study(); 
// elle.study(); 
// john.goofingOff(); 
// elle.goofingOff(); 
// elle.goofingOff(); 
// // console.log(elle); 
// // console.log(john); 
// // console.log(elle.age); 
// // console.log(john.age); 




// class Student {
//     constructor(name, age){
//     this.name = name;
//     this.age = age;
//     }
//     sayHello() {
//     console.log("Hello, front-end!");
//     }
//     }
//     class FrontEndStudent extends Student {
//     }
//     let tSwift = new FrontEndStudent("Taylor Swift", 30);


// class Student {
//     constructor (name, age) {
//         this.name = name; 
//         this.age = age; 
//     }
//     sayHello() {
//         console.log("Hello"); 
//     }  
// }
// class FrontEndStudent extends Student {
//     constructor (name, age) {
//     super(); 
//     this.name = name; 
//     this.age = age; 
// }
// sayHello() {
//     console.log(`Nice to meet you. My name is ${this.name}.`);
//     }
// }
// let tSwift = new FrontEndStudent("Taylor", 30); 
// console.log(tSwift); 
// tSwift.sayHello(); 


// class Person {
//  constructor (name) {
//      this.name = name; 

//  }
//  eat() {
//      console.log ("NOm"); 
//  }
//  speak() {
//      console.log (this.name + "says hello"); 

     
//  }
// }

// class Student extends Person {
//   constructor (name) {
//       super(); 
//       this.name = name; 
//   }
//   speak() {
//       console.log ("Student" +this.name)
//   }
// }

// let adam = new Person ("Adam"); 
// adam.eat(); 
// adam.speak(); 
// console.log(adam.name); 


// let yasmine = new Student ("Yasmine"); 
// console.log(yasmine.name); 
// yasmine.eat(); 
// yasmine.speak(); 


// const food = [
//     {name: "Apple", type: "fruit"}, 
//     {name: "Cucumber", type: "cucumber"}
// ]    

// food.forEach ((x) => {
//     console.log(x.name); 
// }
// ); 


// let dog =  -1
// if (true) {
//     console.log(true); 
// } else if (false) {
//     console.log (false); 
// } else {
//     console.log(other); 
// }

// function dayHours(h) {

// if (h < 18) {
//     return "Good day";
// }else if (h>18) {
//     return "Good night"; 
// }else {
//     return "Good"; 
// }
// }
// console.log (dayHours(20)); 


// function testNum(a) {
//     if (a > 0) {
//       return "positive";
//     } else {
//       return "NOT positive";
//     }
//   }
  
//   console.log(testNum(-5));



// for (let i=1; i<=20;  i++) {
//     console.log(i); 
// }

// let i=1
// while (i<=20) {
//     console.log (i); 
//     i++; 
// }

// let i = 1
// do (console.log (i), i++) 
//     while (i<=20); 


// let employee = {
//     name: "Ashley", 
//     title: "student"
// }
// console.log(employee); 

// employee.push(name: "Steve"); 
// console.log(employee); 


const myFamily = ["Ashley", "Albert"]; 

myFamily.forEach ((x) => {
    alert ("This is a warning message!");
    console.log(x); 
});

// myFamily.push("Steve");
 

// myFamily.splice(1, 0, "Ashley", "Albert")
// //Ashley, Ashley, Albert, Albert 
// console.log(myFamily);

