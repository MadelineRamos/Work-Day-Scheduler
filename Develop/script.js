const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var time = ["9 AM","10 AM","11 AM","12 PM","13 PM","14 PM","15 PM","16 PM","17 PM"];

function setDate() {
    var todaysDate = $("#currentDay");
    var today = new Date();
    var day = weekday[today.getDay()];
    var m = month[today.getMonth()];
    today = day + ", " + m + " " + today.getDate();
    todaysDate.text(today);
}

function loadSchedule() {
    var container = $("#container");
    var dt = new Date($.now());
    var currentHour = dt.getHours();

    // loop the entire following code
    // loop through the entire time array
    // change time[0] to time[i]



    var scheduleTime = time[0].substring(0, time[0].indexOf(" "));
    var amPm = "";
    if (scheduleTime >= 12) {
        amPm = "PM";
    } else {
        amPm = "AM";
    }

    var relativeTime = "";
    console.log(currentHour);
    console.log(scheduleTime);
    if (currentHour == scheduleTime) {
        relativeTime = "present";
    } else if (currentHour > scheduleTime) {
        relativeTime = "past";
    } else {
        relativeTime = "future";
    }

    if (scheduleTime > 12) {
        scheduleTime = scheduleTime - 12;
    }
    // insert row div
    var timeBlock = container.append(
        "<div class=\"row no-gutters\">" +
            "<div class=\"col\">" +
                "<div id=" + scheduleTime + " class=\"hour\">" +
                    "<p>" + scheduleTime + " " + amPm + "</p>" +
                "</div>" +
            "</div>" +
            "<div class=\"col-10\">" +
                "<div class=" + relativeTime + ">" +
                    "<textarea id=" + scheduleTime +  scheduleTime + " class=\"description\" rows=\"3\" cols=\"100\"></textarea>" +
                "</div>" +
            "</div>" +
            "<div class=\"col\">" +
                "<div class=\"saveBtn\">" +
                    "<button id=" + scheduleTime + scheduleTime + scheduleTime + "><i class=\"far fa-floppy-disk\"></i></button>" +
                "</div>" +
            "</div>" +
        "</div>");


}

function storeValue(id) {
    // this is the id of the button clicked
    var id = id;

    // get id of textarea by taking off last digit of id using substring
    // get value from this id

    // get id of hour by taking off last digit of textarea

    // save to local storage by using hour id as key and textarea value as value



    // in load schedule function we need to check to see if anything is in local storage and set the textarea value to whatever is set in local storage if anything
}




window.onload = function() {
    setDate();
    loadSchedule();
}

$("button").click(function() {
    storeValue(this.id);
});