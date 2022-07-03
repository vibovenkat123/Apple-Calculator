
const equals = document.getElementById("equal-sign");
const clear = document.getElementById("all-clear");
const operand = document.getElementById("operand");
const digits = document.querySelectorAll(".number");
let sign = '';
const operator = document.querySelectorAll(".operator");
console.table(digits);
let firstNumber = "";
let secondNumber = "";
let clearScreen = false;
const operate = () => {
  bothNumbers = [Number(firstNumber), Number(secondNumber)];
  console.log(bothNumbers)
  console.log(sign);
  switch (sign) {
    case "+":
      console.log('yo')
      let sum = bothNumbers.reduce((previous, current) => {
        return current+previous;
      }, )
      firstNumber = sum;
      secondNumber = "";
      operand.innerText = sum;
      bothNumbers = [];
      clearScreen = true;
      break;
    case "÷":
      if (secondNumber == 0) {
        operand.innerText = "ERROR";
      } else {
        let quotient = bothNumbers.reduce((previous, current) => {
          return previous / current;
        });
        firstNumber = quotient;
        secondNumber = "";
        operand.innerText = quotient;
        bothNumbers = [];
        clearScreen = true;
        break;
      }

    case "-":
      console.log('hi')
      let difference = bothNumbers.reduce((previous, current) => {
        return previous-current;
      })
      firstNumber = difference;
      secondNumber = "";
      operand.innerText = difference;
      bothNumbers = [];
      clearScreen = true;
      break;
    case "x":
      let product = bothNumbers.reduce((previous, current) => {
        return current*previous;
      })
      console.log(product)
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
      console.log(clearScreen)
      if (clearScreen){
        clearScreen = false;
        operand.textContent = '';
        firstNumber += digit.textContent;
        firstNumber = parseInt(firstNumber)
        operand.textContent += digit.textContent;
      }
      else {
        firstNumber += digit.textContent;
        firstNumber = parseInt(firstNumber)
        operand.textContent += digit.textContent;
      }
    }
    else {
      if (clearScreen){
        operand.textContent = '';
        secondNumber += digit.textContent;
        clearScreen = false;
        secondNumber = parseInt(secondNumber)
        operand.textContent += digit.textContent;
      }
      else{
        secondNumber += digit.textContent;
        secondNumber = parseInt(secondNumber)
        operand.textContent += digit.textContent;
      }
      
    }
  });
});

clear.addEventListener("click", () => {
  operand.textContent = "";
  firstNumber = '';
  secondNumber = '';
  bothNumbers = [];
  sign = '';
});
equals.addEventListener('click', () => {
  operand.textContent = '';
  operate();
})

operator.forEach(operators => {
  operators.addEventListener('click', () => {
    if (operators.id != 'equals-sign'){
      if (sign != ""){
          operand.textContent = '';
          operate();
          clearScreen = true;
          sign = (operators.innerText);
          console.log(operand);
      }
      else {
        operand.textContent = '';
        sign = (operators.innerText);
        operand.textContent = "";
      }
    }
  })
})