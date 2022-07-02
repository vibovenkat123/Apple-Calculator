class Calculator{
  constructor(previousOperandText, currentOperandText) {
    this.previousOperandText = previousOperandText;
    this.currentOperandText = currentOperandText;
    this.clear();
  }
  addToScreen(num) {
    
  }
  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = null;
  }
  pickOperation(operation) {
  
  }
  compute() {
  
  }

  updateDisplay() {
  
  }
  
}

const numberBtn = document.querySelectorAll["[data-number]"];
const operatorBtn = document.querySelectorAll["[data-operator]"];
const equalsBtn = document.querySelector["[data-equals]"];
const clearBtn = document.querySelector["[data-clear]"];
const previousOperandText = document.querySelector["[data-previous-op]"];
const currentOperandText = document.querySelector["[data-current-op]"];
const display = document.getElementsByClassName;

