let num = '0';
let operator;
let runningTotal = 0;

function symbol(symbol1) {
  if (symbol1 === 'C' || symbol1 === 'AC') {
    num = '0'
    display.innerText = num;
  } else if(symbol1 === '='){
    if (lastOperator === null) {
      return
    }
    operate(parseInt(num));
    lastOperator = null;
    num = runningTotal;
    runningTotal = 0;
  } else if(symbol1 === '+' ||
            symbol1 === '-' ||
            symbol1 === 'X' ||
            symbol1 === '/' ||
            symbol1 === '%')  {
      math();
    }
}

function number(number1) {
  if(num === '0') {
    num = number1;
  } else {
    num += number1;
  }
}

function buttonClick(symbol1) {
  if (isNaN(symbol1)) {
    symbol(symbol1);
  } else {
    number(symbol1);
  }
  display.innerText = num;
}


let lastOperator;

function math(operator) {
  if (num ==='0') {
    return;
  }

  const num1 = parseInt(num);

  if(runningTotal === 0) {
    runningTotal = num1;
  } else {
    operate(num);
  }
  lastOperator = operator;
  num = '0';
} 


function operate(num) {
  if(lastOperator === '+'){
    runningTotal += num;
  } else if(lastOperator === '-') {
    runningTotal -= num;
  } else if(lastOperator === 'X') {
    runningTotal *= num;
  } else if(lastOperator === '/') {
    runningTotal /= num;
  } else if(lastOperator === '%') {
    runningTotal %= num;
  }
}


const display = document.querySelector('#display');

function init() {
  const buttons = document.querySelectorAll('.num');
  buttons.forEach((button) => 
    button.addEventListener('click', () => {
      let text = button.innerText;
      buttonClick (text);
    }));

  const buttons2 = document.querySelectorAll('.func');
  buttons2.forEach((button) => 
    button.addEventListener('click', () => {
      let text = button.innerText;
      buttonClick (text);
    }));
}

init();