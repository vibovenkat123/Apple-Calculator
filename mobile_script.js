const equals = document.getElementById("equal-sign");
const clear = document.getElementById("all-clear");
const operand = document.getElementById("operand");
const digits = document.querySelectorAll(".number");
let sign = "";
const operator = document.querySelectorAll(".operator");
let firstNumber = "";
let secondNumber = "";
let clearScreen = false;
const operate = () => {
  bothNumbers = [Number(firstNumber), Number(secondNumber)];
  switch (sign) {
    case "+":
      let sum = bothNumbers.reduce((previous, current) => {
        return current + previous;
      });
      firstNumber = sum;
      secondNumber = "";
      operand.innerText = sum;
      bothNumbers = [];
      clearScreen = true;
      break;
    case "÷":
      let quotient = bothNumbers.reduce((previous, current) => {
        return previous / current;
      });
      firstNumber = quotient;
      secondNumber = "";
      operand.innerText = quotient;
      bothNumbers = [];
      clearScreen = true;
      break;

    case "-":
      let difference = bothNumbers.reduce((previous, current) => {
        return previous - current;
      });
      firstNumber = difference;
      secondNumber = "";
      operand.innerText = difference;
      bothNumbers = [];
      clearScreen = true;
      break;
    case "x":
      let product = bothNumbers.reduce((previous, current) => {
        return current * previous;
      });
      firstNumber = product;
      secondNumber = "";
      operand.innerText = product;
      bothNumbers = [];
      clearScreen = true;
      break;
  }
};

digits.forEach((digit) => {
  digit.addEventListener("click", () => {
    if (sign == "") {
      if (clearScreen) {
        clearScreen = false;
        operand.textContent = "";
        firstNumber += digit.textContent;
        firstNumber = parseInt(firstNumber);
        operand.textContent += digit.textContent;
      } else {
        firstNumber += digit.textContent;
        firstNumber = parseInt(firstNumber);
        operand.textContent += digit.textContent;
      }
    } else {
      if (clearScreen) {
        operand.textContent = "";
        secondNumber += digit.textContent;
        clearScreen = false;
        secondNumber = parseInt(secondNumber);
        operand.textContent += digit.textContent;
      } else {
        secondNumber += digit.textContent;
        secondNumber = parseInt(secondNumber);
        operand.textContent += digit.textContent;
      }
    }
  });
});

clear.addEventListener("click", () => {
  operand.textContent = "";
  firstNumber = "";
  secondNumber = "";
  bothNumbers = [];
  sign = "";
});
equals.addEventListener("click", () => {
  operand.textContent = "";
  operate();
});

operator.forEach((operators) => {
  operators.addEventListener("click", () => {
    if (operators.id != "equals-sign") {
      if (sign != "") {
        operand.textContent = "";
        operate();
        clearScreen = true;
        sign = operators.innerText;
      } else {
        operand.textContent = "";
        sign = operators.innerText;
        operand.textContent = "";
      }
    }
  });
});
