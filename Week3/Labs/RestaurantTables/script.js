"use strict";

$(document).ready(() => {

    $("#inputform").css("display", "none"); //target form to hide 

    $(".available").on("click", function (event) {
        const tableNumber = jQuery(event.currentTarget);
        $("#inputform").css("display", "block"); //showing form when clicked on 
        $("#save").attr("tableNum", tableNumber.attr('id'));
        $("#tablenumber").text(`Table Number: ${tableNumber.text()}`);
    });

    $(".available").mouseenter(function () {
        $(this).toggleClass('highlighted');
    });

    $(".available").mouseleave(function () {
        $(this).toggleClass('highlighted');
    });


    $("#save").click(function () {
        $("#inputform").css("display", "none")

        const tableNumber = $("#save").attr("tableNum");
        $(`#${tableNumber}`).toggleClass('reserved');
        $(`#${tableNumber}`).toggleClass('available');
    });

    $("#x").on("click", function () {
        $("#inputform").css("display", "none")
    });

});