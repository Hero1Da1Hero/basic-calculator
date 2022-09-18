
const display = document.getElementById("calculator-display");

var firstValue = "";
var mode = "";

function writeNumberToScreen(number) {
    if (display.value === "0") {
        display.value = number;
    } else {
        display.value += number;
    }
}

function cleardisplay() {
    display.value = "0";
}

function plus() {
firstValue = display.value;
mode = "plus";
display.value = "";
}

function minus() {
    firstValue = display.value;
    mode = "minus";
    display.value = "";
}

function multiply() {
    firstValue = display.value;
    mode = "multiply";
    display.value = "";
}

function divide() {
    firstValue = display.value;
    mode = "divde";
    display.value = "";
}

function equals() {
    let secondValue = display.value;
    var answer = "";

    if (mode === "plus") {
        answer = parseInt(firstValue) + parseInt(secondValue);
    } else if (mode === "minus") {
        answer = (firstValue) - (secondValue);
    } else if (mode === "multiply") {
        answer = (firstValue) * (secondValue);
    } else if (mode === "divide") {
        answer = (firstValue) / (secondValue);
    }

    display.value = answer;
}
function plus_n_minus() {
    var current_display = display.value;
    if(current_display.includes("-")){
        
       display.value = current_display.replace("-","");
    }
    }
    function presentage() {
        display.value = display.value / 100;
    }
