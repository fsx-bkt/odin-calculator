let userInput = ["","",""];
let ifFirstNumberInput = true;
let ifDecimalPointUsed = false;

let numberButtons = document.querySelectorAll(".number-button");
let operatorButtons = document.querySelectorAll(".operator-button");
let clearButton = document.querySelector(".clear-all-button");
let calculateButton = document.querySelector(".calculate-button");
let displayField = document.querySelector(".display");

for (let i = 0; i < numberButtons.length; i++){
    numberButtons[i].addEventListener("click", assignNumberVariable)
}

for (let i = 0; i < operatorButtons.length; i++){
    operatorButtons[i].addEventListener(("click"), assignOperatorVariable);
    
}

clearButton.addEventListener("click", clear);
calculateButton.addEventListener("click", operate);

function assignNumberVariable(e){
    if(ifFirstNumberInput){
        userInput[0] += e.target.textContent;
        updateDisplayField();
    }
    else{
        userInput[2] += e.target.textContent;
        updateDisplayField();
    }
}

function assignOperatorVariable(e){
    if(userInput[0] === ""){
        alert("Please enter a number first!");
        return;
    }
    userInput[1] = e.target.textContent;
    ifFirstNumberInput = false;
    updateDisplayField();
}

function updateDisplayField(){
    displayField.textContent = userInput[0] 
    + userInput[1]
    + userInput[2];
}

function clearInputAfterCalculation(){
    userInput[1] = "";
    userInput[2] = "";
}

function clear(){
    userInput = ["","",""];
    ifFirstNumberInput = true;
    updateDisplayField();
}

function add(number1, number2){
    userInput[0] = Number(number1) + Number(number2);
    clearInputAfterCalculation();
    updateDisplayField();
}

function subtract(number1, number2){
    userInput[0] = Number(number1) - Number(number2);
    clearInputAfterCalculation();
    updateDisplayField();
}

function multiply(number1, number2){
    userInput[0] = Number(number1) * Number(number2);
    clearInputAfterCalculation();
    updateDisplayField();
}

function divide(number1, number2){
    userInput[0] = Number(number1) / Number(number2);
    clearInputAfterCalculation();
    updateDisplayField();
}

function operate(){
    let operator = userInput[1];
    let number1 = userInput[0];
    let number2 = userInput[2];

    if(number1 === "" || number2 === ""){
        alert("Please enter 2 numbers to calculate!");
        return;
    }

    switch(operator){
        case '+':
            add(number1, number2);
            break;
        case '-':
            subtract(number1, number2);
            break;
        case '*':
            multiply(number1, number2);
            break;
        case '/':
            if (number2 === "0"){
                alert("Can't divide by 0!");
                userInput[2] = "";
                updateDisplayField();
                return;
            }
            divide(number1, number2);
            break;
        default:
            break;
    }
}