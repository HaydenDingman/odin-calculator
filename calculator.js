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
    if (b === 0) {
        return "Oops.";
    }
    return a / b;
}

// INPUT VARIABLES
let firstUserNumber = null;
let secondUserNumber = null;
let operator = null;
let displayNumber = 0;
let result = null;
let readyForInput = true;

function operate(firstNumber, secondNumber, userOperator) {
    if (userOperator == "+") {
        return add(firstNumber, secondNumber);
    }
    if (userOperator == "-") {
        return subtract(firstNumber, secondNumber);
    }
    if (userOperator == "*") {
        return multiply(firstNumber, secondNumber);
    }
    if (userOperator == "/") {
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

let plusButton = document.querySelector(".plus");
let minusButton = document.querySelector(".minus");
let multiplyButton = document.querySelector(".multiply");
let divideButton = document.querySelector(".divide");
let clearButton = document.querySelector(".clear");
let equalsButton = document.querySelector(".equals");

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

plusButton.addEventListener("click", () => operatorInput("+"));
minusButton.addEventListener("click", () => operatorInput("-"));
multiplyButton.addEventListener("click", () => operatorInput("*"));
divideButton.addEventListener("click", () => operatorInput("/"));

clearButton.addEventListener("click", () => clear());
equalsButton.addEventListener("click", () => equals())

// Sets initial display content to 0
display.textContent = "0";

function displayValue(number) {
    if (displayNumber === 0 || readyForInput === false) {
        readyForInput = true;
        displayNumber = number;
    } else {
        displayNumber = displayNumber + number;
    }
    display.textContent = displayNumber;
}

function operatorInput(userOperator) {
    if (operator != null) {
        equals();
    }
    if (operator === null) {
        operator = userOperator;
        firstUserNumber = displayNumber;
        displayNumber = 0;
        display.textContent = `${firstUserNumber} ${operator}`;
    }
}

function clear() {
    displayNumber = 0;
    display.textContent = displayNumber;
    firstUserNumber = null;
    secondUserNumber = null;
    operator = null;
}

function equals() {
    if (firstUserNumber && operator) {
        secondUserNumber = displayNumber;
        result = operate(parseFloat(firstUserNumber), parseFloat(secondUserNumber), operator);
        // Displays string for divide-by-zero error. Otherwise, numeric result.
        if (isNaN(result)) {
            display.textContent = result;
        } else {
            console.log(result);
            console.log(parseFloat(result));
            display.textContent = parseFloat(result.toPrecision(9));
        }
        firstUserNumber = result;
        displayNumber = result;
        operator = null;
        secondUserNumber = null;
        readyForInput = false;
    }


}
