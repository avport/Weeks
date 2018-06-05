"use strict"; 
//npm init 
const http = require("http"); 
const random = require("./quote");

http.createServer((request, response) => {
    //get array in terminal 
    console.log(random());
    response.writeHead(200, {
        "content-type": "text/plain"
    });
    response.write(random()); 
    response.end();
}).listen(3000); 
//localhost:3000 will show 'hello'
//terminal will show "server is running" 






