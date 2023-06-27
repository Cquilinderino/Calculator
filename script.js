let runningTotal = 0;
let buffer = '0';
let previousOperator;

const display = document.querySelector('#display');

function buttonClick(value) {
  if(isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  display.innerText = buffer;
}

function handleSymbol(symbol) {
  switch(symbol) {
    case 'C':
    case 'AC':
      buffer = '0';
      runningTotal = 0;
      break;
    case '=':
      if(previousOperator === null) {
        return
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;
    case '+':
    case '-':
    case 'X':
    case '/':
    case '%':
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if(buffer === '0') {
    return;
  }

  const intBuffer = parseInt(buffer);

  if(runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }
  previousOperator = symbol;
  buffer = '0';
}

function flushOperation(intBuffer) {
  if (previousOperator === '+') {
    runningTotal += intBuffer;
  } else if ( previousOperator === '-') {
    runningTotal -+ intBuffer;
  } else if (previousOperator === 'X') {
    runningTotal *= intBuffer;
  } else if (previousOperator === '/') {
    runningTotal /= intBuffer;
  } else if (previousOperator === '%') {
    runningTotal %= intBuffer;
  }
}

function handleNumber(numberString) {
  if (buffer === '0') {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

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