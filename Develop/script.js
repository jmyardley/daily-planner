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
    
    var labels = ["9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p"];
    var labelDiv = $("<div>");
    labelDiv.attr("class", "col-md-1 hour");
    labelDiv.text((labels[i]).toString());
    hourDiv.append(labelDiv);
    
    var eventForm = $("<form>");
    eventForm.attr("class", "col-md-10");
    hourDiv.append(eventForm);
    var eventInput = $("<input>");
    eventInput.attr("class", "col-md-12");
    eventInput.attr("type", "text");
    eventInput.attr("placeholder", "Add event");
    eventForm.append(eventInput);

    var saveBtn = $("<button>");
    saveBtn.attr("class", "saveBtn col-md-1");
    hourDiv.append(saveBtn); 
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