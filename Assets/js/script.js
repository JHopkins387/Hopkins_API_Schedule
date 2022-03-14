//tells what the time/day is when page opens
let todaysDate = moment().format('dddd, MMMM Do');
$("#currentDay").append(todaysDate);

$(".saveBtn").on("click", function () {
    let textArea = $(this).siblings(".textarea").val();
    let hours = $(this).parent().attr("id");
    localStorage.setItem(hours, textArea);
})

$(document).ready(function () {

    $("#9").val(localStorage.getItem("hours9"));
    $("#10").val(localStorage.getItem("hours10"));
    $("#11").val(localStorage.getItem("hours11"));
    $("#12").val(localStorage.getItem("hours12"));
    $("#13").val(localStorage.getItem("hours1"));
    $("#14").val(localStorage.getItem("hours2"));
    $("#15").val(localStorage.getItem("hours3"));
    $("#16").val(localStorage.getItem("hours4"));
    $("#17").val(localStorage.getItem("hours5"));
})

//functions tracks time
let auditTime = function () {
    //set variable what time of day it is
    let timeNow = moment().hours();

    $(".textarea").each(function () {
        let currenthours = $(this).attr("id");
        if (timeNow > currenthours) {
            $(this).addClass("past");
            $(this).removeClass("present future");
        } else if (timeNow == currenthours) {
            $(this).addClass("present");
            $(this).removeClass("past future");
        } else if (timeNow < currenthours) {
            $(this).addClass("future");
            $(this).removeClass("past present");
        }
    })
}

auditTime();
