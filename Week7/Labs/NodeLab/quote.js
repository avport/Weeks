"use strict"; 


//random quotes in terminal 
// console.log(quote); 

// module.exports = randomQuotes; 
// module.exports = quote; 

function displayRandom () {
    let randomQuotes = ["hampster", "squirrel", "monkey", "goose", "kangaroo"];
    let quote = randomQuotes[Math.floor(Math.random() * randomQuotes.length)]
    return quote;
}
module.exports = displayRandom; 

