var rightNow = moment();
console.log(rightNow); 

var dateDiv = $("<div>");
dateDiv.text(rightNow);
$("#currentDay").append(dateDiv);