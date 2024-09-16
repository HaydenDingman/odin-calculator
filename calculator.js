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
let firstUserNumber = null;
let secondUserNumber = null;
let operator = null;
let displayNumber = 0;

function operate(firstNumber, secondNumber, userOperator) {
    if (userOperator == "plus") {
        return add(firstNumber, secondNumber);
    }
    if (userOperator == "minus") {
        return add(firstNumber, secondNumber);
    }
    if (userOperator == "multiply") {
        return add(firstNumber, secondNumber);
    }
    if (userOperator == "divide") {
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

let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let star = document.querySelector(".multiply");
let slash = document.querySelector(".divide");
let clear = document.querySelector(".clear");
let equals = document.querySelector(".equals");

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

plus.addEventListener("click", () => operatorInput("+"));
minus.addEventListener("click", () => operatorInput("-"));
star.addEventListener("click", () => operatorInput("*"));
slash.addEventListener("click", () => operatorInput("/"));

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

function operatorInput(userOperator) {
    if (operator === null) {
        operator = userOperator;
        firstUserNumber = displayNumber;
        displayNumber = 0;
        display.textContent = `${firstUserNumber} ${operator}`;
    }
}
