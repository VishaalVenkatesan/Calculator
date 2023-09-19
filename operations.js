var firstNum;
var secondNum;
var char;
var result;
const num = document.querySelector('#numbers');
num.addEventListener('click', () => {
  
});

function add(a, b){
    result = a + b;
}

function subtract(a, b){
    result = a - b;
}

function multiply(a, b){
    result = a * b;
}

function divide(a, b){
    result = a / b;
}

function operate(firstNum, char, secondNum){
    if(char == "+"){
        add(firstNum, secondNum);
    }
    if(char == "-"){
        subtract(firstNum, secondNum);
    }
    if(char == "*"){
        multiply(firstNum, secondNum);
    }
    if(chat == "/"){
        divide(firstNum, secondNum);
    }
    if(char == "="){
        return result;
    }
}