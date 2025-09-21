const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine")

const times = document.getElementById("times");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const equal = document.getElementById("equal");
const slash = document.getElementById("slash");
const clear = document.getElementById("clear")

const output = document.getElementById("output");

let number1 = "";
let number2 = "";

let firstNum = true;

let operator = "";

let placeholder1 ="";
let placeholder2 ="";
let answer = "";

output.textContent = placeholder1

times.onclick = function(){
    if (!firstNum && number1 === "" || number1 === placeholder1) {
        return
    }
    else {
        firstNum = false;
        output.textContent = placeholder2;
        operator = "*";
    }
}

plus.onclick = function(){
    if (!firstNum && number1 === "" || number1 === placeholder1) {
        return
    }
    else {
        firstNum = false;
        operator = "+";
        output.textContent = placeholder2;

    }
}

minus.onclick = function(){
    if (!firstNum && number1 === "" || number1 === placeholder1) {
        return
    }
    else {
        firstNum = false;
        output.textContent = placeholder2;
        operator = "-";
    }
}

slash.onclick = function(){
    if (!firstNum && number1 === "" || number1 === placeholder1) {
        return;
    }
    else {
        firstNum = false;
        operator = "/";
        output.textContent = placeholder2;
    }
}

equal.onclick = function(){
    console.log(number1, number2)
    if (number1 != "" && number2 != ""){
        if (operator === "+") {
            answer = (Number(number1) + Number(number2)).toString();
        output.textContent = answer;
        answer = "";

        number1 = "";
        number2 = "";
        firstNum = true;
        operator = "";

        }

        else if(operator === "-") {
            answer = (Number(number1) - Number(number2)).toString();
        output.textContent = answer;
        answer = "";

        number1 = "";
        number2 = "";
        firstNum = true;
        operator = "";

        }

        else if (operator === "*") {
            answer = (Number(number1) * Number(number2)).toString();
        output.textContent = answer;
        answer = "";

        number1 = "";
        number2 = "";
        firstNum = true;
        operator = "";

        }

        else if (operator === "/") {
            answer = ((Number(number1) /Number(number2))).toString();
        output.textContent = answer;
        answer = "";

        number1 = "";
        number2 = "";
        firstNum = true;
        operator = "";

        }
    }
}


clear.onclick = function(){
    firstNum = true;
    number1 = "";
    number2 = "";
    output.textContent = placeholder1;
    operator = "";
}




zero.onclick = function(){
    if (firstNum) {
        if (number1 === "") {
            return
        }
        else {
            number1 += "0"
            output.textContent = number1
        }
    }
    else if(firstNum === false) {
        number2 += "0"
            output.textContent = number2
    }
}

one.onclick = function(){
    if (firstNum) {
        number1 += "1"
        output.textContent = number1
    }
    else if(firstNum === false) {
        number2 += "1"
            output.textContent = number2
    }
}

two.onclick = function(){
    if (firstNum) {
        number1 += "2"
        output.textContent = number1
    }
    else if(firstNum === false) {
        number2 += "2"
            output.textContent = number2
    }
}

three.onclick = function(){
    if (firstNum) {
        number1 += "3"
        output.textContent = number1
    }
    else if(firstNum === false) {
        number2 += "3"
            output.textContent = number2
    }
}

four.onclick = function(){
    if (firstNum) {
        number1 += "4"
        output.textContent = number1
    }
    else if(firstNum === false) {
        number2 += "4"
            output.textContent = number2
    }
}

five.onclick = function(){
    if (firstNum) {
        number1 += "5"
        output.textContent = number1
    }
    else if(firstNum === false) {
        number2 += "5"
            output.textContent = number2
    }
}

six.onclick = function(){
    if (firstNum) {
        number1 += "6"
        output.textContent = number1
    }
    else if(firstNum === false) {
        number2 += "6"
            output.textContent = number2
    }
}

seven.onclick = function(){
    if (firstNum) {
        number1 += "7"
        output.textContent = number1
    }
    else if(firstNum === false) {
        number2 += "7"
            output.textContent = number2
    }
}

eight.onclick = function(){
    if (firstNum) {
        number1 += "8"
        output.textContent = number1
    }
    else if(firstNum === false) {
        number2 += "8"
            output.textContent = number2
    }
}

nine.onclick = function(){
    if (firstNum) {
        number1 += "9"
        output.textContent = number1
    }
    else if(firstNum === false) {
        number2 += "9"
            output.textContent = number2
    }
}

