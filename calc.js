const screenDisplay = document.querySelector('#screen');

const clearButton = document.querySelector('#btn-clear');

function resetDisplay() {
    screenDisplay.value = '';
}

clearButton.addEventListener ('click', resetDisplay);

const nineButton = document.querySelector('#btn-9');
const eightButton = document.querySelector('#btn-8');
const sevenButton = document.querySelector('#btn-7');
const sixButton = document.querySelector('#btn-6');
const fiveButton = document.querySelector('#btn-5');
const fourButton = document.querySelector('#btn-4');
const threeButton = document.querySelector('#btn-3');
const twoButton = document.querySelector('#btn-2');
const oneButton = document.querySelector('#btn-1');
const zeroButton = document.querySelector('#btn-0');
const decimalButton = document.querySelector('#btn-dot');
const plusButton = document.querySelector('#btn-plus');
const minusButton = document.querySelector('#btn-minus');
const timesButton = document.querySelector('#btn-times');
const divideButton = document.querySelector('#btn-divide');
const equalsButton = document.querySelector('#btn-equals');

function buttonClick() {
    screenDisplay.value += this.value;
}

nineButton.addEventListener('click', buttonClick);
eightButton.addEventListener('click', buttonClick);
sevenButton.addEventListener('click', buttonClick);
sixButton.addEventListener('click', buttonClick);
fiveButton.addEventListener('click', buttonClick);
fourButton.addEventListener('click', buttonClick);
threeButton.addEventListener('click', buttonClick);
twoButton.addEventListener('click', buttonClick);
oneButton.addEventListener('click', buttonClick);
zeroButton.addEventListener('click', buttonClick);
plusButton.addEventListener('click', buttonClick);
minusButton.addEventListener('click', buttonClick);
timesButton.addEventListener('click', buttonClick);
divideButton.addEventListener('click', buttonClick);
decimalButton.addEventListener('click', buttonClick);

function disableButtons() {
    plusButton.disabled = true;
    minusButton.disabled = true;
    timesButton.disabled = true;
    divideButton.disabled = true;
}

function reenableButtons() {
    plusButton.disabled = false;
    minusButton.disabled = false;
    timesButton.disabled = false;
    divideButton.disabled = false;
}


plusButton.addEventListener('click', disableButtons);
minusButton.addEventListener('click', disableButtons);
timesButton.addEventListener('click', disableButtons);
divideButton.addEventListener('click', disableButtons);

equalsButton.addEventListener('click', calculate);
equalsButton.addEventListener('click', reenableButtons);
clearButton.addEventListener('click', reenableButtons);

function calculate() {
    const parsedArray = screenDisplay.value.split(' ');
    const operand1 = parseFloat(parsedArray[0]);
    const operator = parsedArray[1];
    const operand2 = parseFloat(parsedArray[2]);

    if (operator === '+') {
        screenDisplay.value = operand1 + operand2;
    } else 
    if (operator === '-') {
        screenDisplay.value = operand1 - operand2;
    } else 
    if (operator === '*') {
        screenDisplay.value = operand1 * operand2;
    } else
    if (operator === '/') {
        screenDisplay.value = operand1 / operand2;
    } else
    {screenDisplay.value = 'Error';}
}