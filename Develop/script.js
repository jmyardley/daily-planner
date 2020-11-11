var plannerBox = $(".container");
var rightNow = moment().format("MMMM Do YYYY");
console.log(rightNow); 

var dateDiv = $("<div>");
dateDiv.text(rightNow);
$("#currentDay").append(dateDiv);

var currentTime = moment().format("H");
console.log(currentTime);

for (var i = 0; i < 9; i++){
    var hourDiv = $("<div>");
    hourDiv.attr("class", "row");
    plannerBox.append(hourDiv);
    hourColor(i, hourDiv);
}

function hourColor(hour, div){
    if (hour + 9 === rightNow){
        div.css("background-color", "DodgerBlue");
    } else if ( hour + 9 > rightNow){
        div.css("background-color", "teal");
    } else {
        div.css("background-color", "Silver");
    }
}