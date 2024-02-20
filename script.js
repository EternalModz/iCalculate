// script.js
let currentInput = "";
let currentOperator = "";
let previousInput = "";

const displayElement = document.getElementById("display");

function clearDisplay() {
  currentInput = "";
  currentOperator = "";
  previousInput = "";
  updateDisplay();
}

function appendSymbol(symbol) {
  if (symbol === '.' && currentInput.includes('.')) {
    return; // Avoid appending multiple decimal points
  }

  currentInput += symbol;
  updateDisplay();
}

function updateDisplay() {
  displayElement.textContent = currentInput || "0";
}

function calculateResult() {
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  switch (currentOperator) {
    case '+':
      currentInput = (num1 + num2).toString();
      break;
    case '-':
      currentInput = (num1 - num2).toString();
      break;
    case '*':
      currentInput = (num1 * num2).toString();
      break;
    case '/':
      currentInput = (num1 / num2).toString();
      break;
    default:
      // No operator, or '=' was pressed without a previous operation
      return;
  }

  previousInput = "";
  currentOperator = "";
  updateDisplay();
}

// You can add event listeners for dark mode/light mode toggle here if needed
