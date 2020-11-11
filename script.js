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
    
    var labels = ["9a", "10a", "11a", "12p", "1p", "2p", "3p", "4p", "5p"];
    var labelDiv = $("<div>");
    labelDiv.attr("class", "col-md-1 hour");
    labelDiv.text((labels[i]).toString());
    hourDiv.append(labelDiv);
    
    var hourText = $("<textarea>");
    hourText.attr("class", "col-sm-10 form-control");
    var uniqueTextId = "form" + i.toString();
    hourText.attr("id", uniqueTextId);
    hourText.attr("rows", "2");
    hourColor(i, hourText);
    hourDiv.append(hourText);




    var saveBtn = $("<button>");
    saveBtn.attr("class", "saveBtn col-md-1");
    saveBtn.attr("id", i.toString());
    hourDiv.append(saveBtn); 
}

function hourColor(hour, div){
    if (hour + 9 < currentTime){
        div.css("background-color", "Silver");
    } else if (hour + 9 > currentTime){
        div.css("background-color", "teal");
    } else {
        div.css("background-color", "LightCoral");
    }
    console.log(currentTime);
    console.log(hour);
}

$("#0").on("click", function(){
    var input0 = $("#form0").val();
    localStorage.setItem("input0", input0);
});
$("#1").on("click", function(){
    var input1 = $("#form1").val();
    localStorage.setItem("input1", input1);
});
$("#2").on("click", function(){
    var input2 = $("#form2").val();
    localStorage.setItem("input2", input2);
});
$("#3").on("click", function(){
    var input3 = $("#form3").val();
    localStorage.setItem("input3", input3);
});
$("#4").on("click", function(){
    var input4 = $("#form4").val();
    localStorage.setItem("input4", input4);
});
$("#5").on("click", function(){
    var input5 = $("#form5").val();
    localStorage.setItem("input5", input5);
});
$("#6").on("click", function(){
    var input6 = $("#form6").val();
    localStorage.setItem("input6", input6);
});
$("#7").on("click", function(){
    var input7 = $("#form7").val();
    localStorage.setItem("input7", input7);
});
$("#8").on("click", function(){
    var input8 = $("#form8").val();
    localStorage.setItem("input8", input8);
});

$("#form0").val(localStorage.getItem("input0"));
$("#form1").val(localStorage.getItem("input1"));
$("#form2").val(localStorage.getItem("input2"));
$("#form3").val(localStorage.getItem("input3"));
$("#form4").val(localStorage.getItem("input4"));
$("#form5").val(localStorage.getItem("input5"));
$("#form6").val(localStorage.getItem("input6"));
$("#form7").val(localStorage.getItem("input7"));
$("#form8").val(localStorage.getItem("input8"));