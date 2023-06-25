let num1 = ''; //queryselect num buttons
let num2 = '';
let operator = ""; //queryselect operator buttons

let displayedNumber = 0;
let result = null;

function operate() {
  switch (operator) {
    case '+':
      add(num1, num2);
      break;
    case '-':
      subtract(num1, num2);
    case 'X':
      multiply(num1, num2);
    case '/':
      divide(num1, num2);
    case '%':
      modulo(num1, num2);
    case 'C':
      clear();
    case 'AC':
      allClear();
    case '=':
      equals(num1, num2)
  }
}

function add(firstNum, secondNum) {
  result = firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
  result = displayedNumber = firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
  result = displayedNumber = firstNum * secondNum;
}

function divide(firstNum, secondNum) {
  result = displayedNumber = firstNum / secondNum;
}

function modulo(firstNum, secondNum) {
  result = displayedNumber = firstNum % secondNum;
}

//=================================//


const display = document.querySelector('#display');



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => 
  // button.addEventListener('click', () => {
  //   display.textContent = button.innerText;
  // }));
  button.addEventListener('click', () => {
    let text = button.innerText;
    command(text);
  }));

let runningNum = '';

function command(clicked) {
  if(clicked === '+') {
    add(runningNum);
  } else if(clicked === '-'){
    subtract(runningNum);
  } else if(clicked ==='X'){
    multiply(runningNum);
  } else if(clicked ==='/') {
    divide(runningNum);
  } else if(clicked ==='C' || clicked === 'AC') {
    runningNum = '';
    display.innerText = 0;
  } else {
    runningNum += clicked;
    display.innerText = runningNum;
  }
}