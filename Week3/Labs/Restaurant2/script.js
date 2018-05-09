"use strict";

$(document).ready(() => {

    let ogText;

    $("#inputform").css("display", "none"); //target form to hide 

    $(".available").on("click", function (event) { //a function when an availble table is clicked 
        const tableNumber = jQuery(event.currentTarget); //setting the clicked-on talble to variable tableNumber
        // $("#inputform").css("display", "block"); //showing form when available table clicked on 
        $("#inputform").fadeIn(2000); 
        $("#save").attr("tableNum", tableNumber.attr('id')); //giving save button attr called tableNum, which is the id of the table 
        $("#tablenumber").text(`Table Number: ${tableNumber.text()}`); //taking inner text from tableNumber variable (table clicked) and displaying
    });

    $(".available").mouseenter((event) => { //highlighting available tables when mouseenter
        $(event.target).toggleClass('highlighted');
        ogText = $(event.target).text();
        const tableName = $(event.target).attr("tableName");
        const partySize = $(event.target).attr("partySize");
        if(tableName && partySize){
            $(event.target).text(`${tableName}\n${partySize}`);  
        }
    }).mouseleave((event) => {//toggling class to not highlighted when mouseleave
        $(event.target).toggleClass('highlighted');
        $(event.target).text(ogText);
  });


    $("#save").click(function () { 
        // $("#inputform").css("display", "none") //when save is clicked, form is not displayed 
        $("#inputform").fadeOut(2000)
        const tableNumber = $("#save").attr("tableNum"); // set variable tableNumber to have the tableNum attr given to the save button
        $(`#${tableNumber}`).toggleClass('reserved'); //toggle when save button clicked 
        $(`#${tableNumber}`).toggleClass('available');
        const personName = $('#personName').val();
        const partySize = $(`#partySize`).val(); 
        $(`#${tableNumber}`).attr('tableName', personName);
        $(`#${tableNumber}`).attr('partySize', partySize);
        $("#personName").val(""); 
        $("#partySize").val(""); 
        $("#phoneNumber").val(""); 
    });

    $("#x").on("click", function () { //when you click x, form is not displayed 
        $("#inputform").css("display", "none")
    });
 

});

