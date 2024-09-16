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

function modulo(a, b) {
    if (b === 0) {
        return a;
    }
    return a % b;
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
    if (userOperator == "%") {
        return modulo(firstNumber, secondNumber);
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
let dot = document.querySelector(".dot");

let plusButton = document.querySelector(".plus");
let minusButton = document.querySelector(".minus");
let multiplyButton = document.querySelector(".multiply");
let divideButton = document.querySelector(".divide");
let moduloButton = document.querySelector(".modulo");
let signButton = document.querySelector(".sign");
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
dot.addEventListener("click", () => displayValue("."))

plusButton.addEventListener("click", () => operatorInput("+"));
minusButton.addEventListener("click", () => operatorInput("-"));
multiplyButton.addEventListener("click", () => operatorInput("*"));
divideButton.addEventListener("click", () => operatorInput("/"));
moduloButton.addEventListener("click", () => operatorInput("%"));
signButton.addEventListener("click", () => changeSign());

clearButton.addEventListener("click", () => clear());
equalsButton.addEventListener("click", () => equals())

// KEYBOARD SUPPORT
document.addEventListener("keydown", (event) => {
    const NUMERIC = "1234567890";
    const SYMBOLS = "+-/*%";
    if (NUMERIC.includes(event.key)) {
        displayValue(event.key);
    } else if (SYMBOLS.includes(event.key)) {
        operatorInput(event.key);
    } else if (event.key == "C" || event.key == "c") {
        clear();
    } else if (event.key == "=" || event.key == "Enter") {
        equals();
    } else if (event.key == "Backspace") {
        if (displayNumber != 0) {
            if (displayNumber.length >= 2) {
                displayNumber = displayNumber.slice(0, -1);
            } else {
                displayNumber = 0;
            }
            display.textContent = displayNumber;
        }
    }
})

// Sets initial display content to 0
display.textContent = "0";

function displayValue(number) {
    if (number === ".") {
        if (displayNumber === 0 || displayNumber.toString().includes(".")) {
            return;
        }
    }
    
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
            display.textContent = parseFloat(result.toPrecision(9));
        }
        // Resets operatorInput and secondUserNumber functions so user can chain operations
        // readyForInput ensures if user doesn't chain operations, display works as normal
        firstUserNumber = result;
        displayNumber = result;
        operator = null;
        secondUserNumber = null;
        readyForInput = false;
    }
}

function changeSign() {
    if (parseFloat(displayNumber) != 0) {
        displayNumber = parseFloat(displayNumber) * -1;
        display.textContent = displayNumber;
    }
}