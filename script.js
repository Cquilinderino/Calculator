// On number press
const display = document.querySelector('#display');

const buttons = document.querySelectorAll('.num');
buttons.forEach((button) => 
  // button.addEventListener('click', () => {
  //   display.textContent = button.innerText;
  // }));
  button.addEventListener('click', () => {
    let text = button.innerText;
    displayNum(text);
  }));

const buttons2 = document.querySelectorAll('.func');
buttons2.forEach((button) => 
  // button.addEventListener('click', () => {
  //   display.textContent = button.innerText;
  // }));
  button.addEventListener('click', () => {
    let text = button.innerText;
    command(text);
  }));

let runningNum = '';

function displayNum(number) {
  // runningNum = parseInt(display.innerText);
  runningNum += number;
  display.innerText = runningNum;
}

function command(symbol) {
  if(symbol === '+') {
    add();
  }
  if(symbol === '-') {
    subtract();
  }
  if(symbol === 'X') {
    multiply();
  }
  if(symbol === '=') {
    sum();
  }
  if(symbol === '/') {
    divide();
  }
  if(symbol === '%') {
    modulo();
  }
  if(symbol === "C" || symbol === "AC") {
    runningNum = '';
    num1 ='';
    num2='';
    display.innerText = 0;
  }
}

let num1 = '';
let num2 = '';
let operator = '';

function add() {
  operator = '+';

  if(num1 !== '') {
    num2 = parseInt(display.innerText);
    let result = num1 + num2;
    display.innerText = result;
  }
  num1 = parseInt(runningNum);
  runningNum = '';
}

function subtract() {
  operator = '-';

  if(num1 !== '') {
    num2 = parseInt(display.innerText);
    let result = num1 - num2;
    display.innerText = result;
  }
  num1 = parseInt(runningNum);
  runningNum = '';
}

function multiply() {
  operator = 'X';

  if(num1 !== '') {
    num2 = parseInt(display.innerText);
    let result = num1 * num2;
    display.innerText = result;
  }
  num1 = parseInt(runningNum);
  runningNum = '';
}

function sum() {
  num2 = parrse
}



function divide() {
  operator = '/';

  if(num1 !== '') {
    num2 = parseInt(display.innerText);
    let result = num1 / num2;
    display.innerText = result;
  }
  num1 = parseInt(runningNum);
  runningNum = '';
}

function modulo() {
  operator = '%';

  if(num1 !== '') {
    num2 = parseInt(display.innerText);
    let result = num1 % num2;
    display.innerText = result;
  }
  num1 = parseInt(runningNum);
  runningNum = '';
}

//==============================================================================
