// BASIC MATH FUNCTIONS

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// INPUT VARIABLES
let firstNumber = 0;
let secondNumber = 0;
let operator = 0;
let displayNumber = 0;

function operate(firstNumber, secondNumber, operator) {
    if (operator == "plus") {
        return add(firstNumber, secondNumber);
    }
    if (operator == "minus") {
        return add(firstNumber, secondNumber);
    }
    if (operator == "multiply") {
        return add(firstNumber, secondNumber);
    }
    if (operator == "divide") {
        return divide(firstNumber, secondNumber);
    }
}

// QUERYSELECTORS
let display = document.querySelector(".display");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");
let seven = document.querySelector(".seven");
let eight = document.querySelector(".eight");
let nine = document.querySelector(".nine");
let zero = document.querySelector(".zero");

one.addEventListener("click", () => displayValue("1"));
two.addEventListener("click", () => displayValue("2"));
three.addEventListener("click", () => displayValue("3"));
four.addEventListener("click", () => displayValue("4"));
five.addEventListener("click", () => displayValue("5"));
six.addEventListener("click", () => displayValue("6"));
seven.addEventListener("click", () => displayValue("7"));
eight.addEventListener("click", () => displayValue("8"));
nine.addEventListener("click", () => displayValue("9"));
zero.addEventListener("click", () => displayValue("0"));

// Sets initial display content to 0
display.textContent = "0";

function displayValue(number) {
    if (parseInt(displayNumber) === 0) {
        displayNumber = number;
    } else {
        displayNumber = displayNumber + number;
    }        
    display.textContent = displayNumber;
}
