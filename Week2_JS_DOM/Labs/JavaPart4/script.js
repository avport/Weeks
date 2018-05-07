"use strict";


function add(event) {
    // prevent reloading the page because it deletes all contacts
    event.preventDefault();
    let name = document.getElementById('personName');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let relation = document.getElementById('relation');

    //create a new info object 
    //Add email phone and relation to info object
    let info = {}
    info.name = name.value;
    info.email = email.value;
    info.phone = phone.value;
    info.relation = relation.value;

    //clears values of boxes 
    name.value = ""
    email.value = ""
    phone.value = ""
    relation.value = ""

    display(info);
}




function display(info) {
    // <div id="boxes" class="boxes">
    // <div class="box">
    // <ul>
    //    <li>Name: Megan</li>
    //    <li>Email: megan@grandcircus.co</li>
    //    <li>Phone: 111-222-3333</li> 
    //    <li>Relation: friend</li> 
    // </ul>
    // <img class = "trashcan" src="trashcan.jpeg" alt="trashcan">
    // </div>


    //Creating the contact boxes in the DOM 
    let box = document.createElement("div");
    box.setAttribute('class', 'box');
    let list = document.createElement("ul");

    // Needs to set inner text from info
    let name = document.createElement("li");
    let email = document.createElement("li");
    let phone = document.createElement("li");
    let relation = document.createElement("li");

    name.innerText = `Name: ${info.name}`;
    email.innerText = `Email: ${info.email}`;
    phone.innerText = `Phone: ${info.phone}`;
    relation.innerText = `Relation: ${info.relation}`;

    let trashcan = document.createElement("img");
    trashcan.setAttribute('class', 'trashcan');
    trashcan.setAttribute('src', './trashcan.jpeg');
    trashcan.setAttribute('alt', 'trashcan');
    trashcan.onclick = function () {
        deleteAt(this.parentElement);
    };

    //Build box
    box.appendChild(list);
    list.appendChild(name);
    list.appendChild(email);
    list.appendChild(phone);
    list.appendChild(relation);
    box.appendChild(trashcan);

    //Append to boxes
    document.getElementById('boxes').appendChild(box)
}

function deleteAt(contactElement) {
    contactElement.remove();
}