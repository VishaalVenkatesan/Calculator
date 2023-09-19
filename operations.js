let firstNum = '';
let secondNum = '';
let operator = '';
let result = '';
const display = document.getElementById('display');

function appendToDisplay(value) {
    if (value === '+' || value === '-' || value === '*' || value === '/' || value === '%' ) {
        if (firstNum !== '' && secondNum === '') {
            operator = value;
            display.value += ' ' + value + ' ';
        }
    } else {
        if (operator === '') {
            firstNum += value;
            display.value += value;
        } else {
            secondNum += value;
            display.value += value;
        }
    }
}

function clearDisplay() {
    firstNum = '';
    secondNum = '';
    operator = '';
    result = '';
    display.value = '';
}

function calculateResult() {
    if (firstNum !== '' && secondNum !== '') {
        const num1 = parseFloat(firstNum);
        const num2 = parseFloat(secondNum);

        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
                case '%':
                    result = num1 % num2;
                    break; 
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = 'Error: Division by zero';
                }
                break;
        }

        display.value = result;
        firstNum = result.toString();
        secondNum = '';
        operator = '';
    }
}
