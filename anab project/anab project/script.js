let displayValue = '';
let operator = '';

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendOperator(op) {
    if (displayValue !== '') {
        operator = op;
        displayValue += ' ' + op + ' ';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    operator = '';
    updateDisplay();
}

function calculateResult() {
    const expression = displayValue.split(' ');
    if (expression.length !== 3) {
        alert('Invalid expression');
        return;
    }

  const num1 = parseFloat(expression[0]);
    const op = expression[1];
    const num2 = parseFloat(expression[2]);
    let result;

    switch (op) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;

  break;
        default:
            alert('Invalid operator');
            return;
    }

    displayValue = result.toString();
    operator = '';
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}