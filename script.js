function add(...args) {
  console.log(args);
}

function subtract() {

}

function multiply() {

}

function divide() {

}

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

let runningNum = 0;

function command(clicked) {
  if(clicked === '+') {
    add(runningNum);
  } else if(clicked === '-'){
    subtract(runningNum);
  } else if(clicked ==='X'){
    multiply(runningNum);
  } else if(clicked ==='/') {
    divide(runningNum);
  } else {
    display.innerText = clicked;
    runningNum = clicked;
  }
}