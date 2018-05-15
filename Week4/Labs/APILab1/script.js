"use strict";
$(document).ready(() => {



    $.get("https://www.reddit.com/r/aww/.json", (data, status) => {
      
    data.data.children.forEach(child => {
        console.log(data); 
        // console.log(child.data.title); 
        // console.log(child.data.url);
        // console.log(child.data.permalink); 

        $("body").append (`
    <h1>AWWWW...
    </h1>
    <div>
        <h4>${child.data.title}</h4>
        <img src="${child.data.thumbnail}">
        <div id="url">${child.data.url}</div>
    </div>
`)



    });


  



     
    });




});