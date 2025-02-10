let userInput = [];
let ifFirstNumberInput = true;
let ifOperatorButtonPressed = true;

let numberButtons = document.querySelectorAll(".number-button");
let operatorButtons = document.querySelectorAll(".operator-button");

for (let i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click", assignNumberVariable)
}

for (let i = 0; i < operatorButtons.length; i++){
    operatorButtons[i].addEventListener(("click"), assignOperatorVariable);
}

function assignNumberVariable(e){
    if(ifFirstNumberInput){
        userInput[0] += e.target.textContent;
    }
    else{
        userInput[2] += e.target.textContent;
    }
}

function assignOperatorVariable(e){
    userInput[1] = e.target.textContent;
}

function add(number1, number2){
    console.log("Add works!");
}

function subtract(number1, number2){
    console.log("Subtract works!");
}

function multiply(number1, number2){
    console.log("Multiply works!");
}

function divide(number1, number2){
    console.log("Divide works!");
}

function operate(operator, number1, number2){
    switch(operator){
        case '+':
            add();
            break;
        case '-':
            subtract();
            break;
        case '*':
            multiply();
            break;
        case '/':
            divide();
            break;
        default:
            break;
    }
}

operate('+',1,1);
operate('-',1,1);
operate('*',1,1);
operate('/',1,1);