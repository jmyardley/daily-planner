var plannerBox = $(".container");
var rightNow = moment().format("MMMM Do YYYY");
console.log(rightNow); 

var dateDiv = $("<div>");
dateDiv.text(rightNow);
$("#currentDay").append(dateDiv);

var currentTime = moment().format("h");
console.log(currentTime);

for (var i = 0; i < 9; i++){
    var hourDiv = $("<div>");
    hourDiv.attr("class", "row");
    plannerBox.append(hourDiv);
}