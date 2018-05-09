"use strict";

$(document).ready(() => {

    let ogText;

    $("#inputform").css("display", "none"); //target form to hide before clicking on a table

    $(".available").on("click", function (event) { //a function when an availble table is clicked 
        const tableNumber = $(event.currentTarget); //setting the clicked-on talble to variable tableNumber
        $("#inputform").fadeIn(1000); //fadeIn of the form
        $("#save").attr("tableNum", tableNumber.attr('id')); //giving save button attr called tableNum, which is the id of the table 
        $("#tablenumber").text(`Table Number: ${tableNumber.text()}`); //taking inner text from tableNumber variable (table clicked) and displaying
    });

    $(".available").mouseenter((event) => { 
        $(event.target).toggleClass('highlighted'); //highlighting available tables when mouseenter
        ogText = $(event.target).text();//original text of the element is set to ogText (1, 2...)
        const tableName = $(event.target).attr("tableName");//variable called tableName is assigned the tableName attribute of the event target (table moused over)
        const partySize = $(event.target).attr("partySize");//variable partySize is assigned the partySize attr of the event target (table)
        if(tableName && partySize){ //if when you mouse over the table, it as tableName and partySize variables...
            $(event.target).text(`${tableName}\n${partySize}`);  //display the variables' text 
        }
    }).mouseleave((event) => {
        $(event.target).toggleClass('highlighted'); //toggling class to not highlighted when mouseleave
        $(event.target).text(ogText); //shows event target's original text 
  });

    $("#save").click(function () { 
        $("#inputform").fadeOut(1000) //fadeOut 
        const tableNumber = $("#save").attr("tableNum"); // assign the variable tableNumber the tableNum attr of the save button (tableNum attr has the value of the id of the table)
        $(`#${tableNumber}`).toggleClass('reserved'); //toggle when save button clicked, the tableNumber is in string literal so it's the id of the table, not just the string 'table 1' 
        $(`#${tableNumber}`).toggleClass('available'); //
        const personName = $('#personName').val(); //const personName is assigned value of name input box 
        const partySize = $(`#partySize`).val(); //const partySize is assigned the value of the partySize input box 
        $(`#${tableNumber}`).attr('tableName', personName); //the tableName id is assigned the attr called tableName with value of the variable personName, which is the value of the info put in name input box 
        $(`#${tableNumber}`).attr('partySize', partySize); // the tableName id is assigned the attr called partySize with the value of the varialbe partySize, which is the value of the input into the party size box
        $("#personName").val(""); //clear text field by setting the value to empty string of text box with id personName (name field)
        $("#partySize").val(""); //clear text field 
        $("#phoneNumber").val(""); //clear text field 
    });

    $("#x").on("click", function () { 
        $("#inputform").css("display", "none") //when you click x, form is not displayed 
    });
});

