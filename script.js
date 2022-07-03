const decimal = document.getElementById("decimal");
const equals = document.getElementById("equal-sign");
const clear = document.getElementById("all-clear");
const operand = document.getElementById("operand");
const digits = document.querySelectorAll("button");
const button = document.querySelectorAll("button");
const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const operate = (operator, num1, num2) => {
  switch (operator) {
    case "+":
      return add(num1, num2);

    case "/":
      if (num2 == 0) {
        return "ERROR";
      } else {
        return divide(num1, num2);
      }

    case "-":
      return subtract(num1, num2);

    case "*":
      return multiply(num1, num2);
  }
};
let operator = '';

for (const digit of digits) {
  digit.addEventListener("click", () => {
    if (digit.classList.contains("number")) {
      operand.textContent = digit.textContent;
    }
  });
}

