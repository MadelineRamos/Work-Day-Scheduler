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

    for (let i = 0; i < time.length; i++) {

        var scheduleTime = time[i].substring(0, time[i].indexOf(" "));
        var amPm = "";
        if (scheduleTime >= 12) {
            amPm = "PM";
        } else {
            amPm = "AM";
        }

        var relativeTime = "";
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
                    "<div class=\"hour\">" +
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
                        "<button id=" + scheduleTime + scheduleTime + scheduleTime + "><ion-icon name=\"save-sharp\"></ion-icon></button>" +
                    "</div>" +
                "</div>" +
            "</div>");
    };
}

function storeValue(id) {
    var id = id;
    var textAreaId = "";
    if (id.length > 3) {
        textAreaId = id.substring(0, 4);
    } else {
       textAreaId = id.substring(0, 2);
    }
    var textArea = $("#" + textAreaId);
    var textAreaValue = textArea.val();
    localStorage.setItem(textAreaId, textAreaValue);
}

function loadValue () {
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        var textArea = $("#" + key);
        var text = localStorage.getItem(key);
        textArea.val(text);
    }
}

window.onload = function() {
    setDate();
    loadSchedule();
    loadValue();
}

$(document).ready(function(){
    $("button").click(function() {
        storeValue(this.id);
    });
});
