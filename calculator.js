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