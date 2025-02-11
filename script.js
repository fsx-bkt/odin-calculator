let userInput = ["","",""];
let ifFirstNumberInput = true;

let numberButtons = document.querySelectorAll(".number-button");
let decimalButton = Array.from(numberButtons).find(button => button.textContent === '.');
decimalButton.addEventListener('click', function() {
    this.disabled = true;
});
let operatorButtons = document.querySelectorAll(".operator-button");
let backSpaceButton = document.querySelector(".backspace-button");
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
backSpaceButton.addEventListener("click", deletePreviousEntry);

function deletePreviousEntry(){
    if(ifFirstNumberInput){
        if(userInput[0][userInput[0].length -1] === "."){
            decimalButton.disabled = false;
        }
        userInput[0] = userInput[0].slice(0, -1);
        updateDisplayField();
    }
    else if(userInput[2] === ""){
        userInput[1] = userInput[1].slice(0, -1);
        ifFirstNumberInput = true;
        updateDisplayField();
    }
    else{
        if(userInput[2][userInput[2].length -1] === "."){
            decimalButton.disabled = false;
        }
        userInput[2] = userInput[2].slice(0, -1);
        updateDisplayField();
    }
}

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
    decimalButton.disabled = false;
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
    if (!Number.isInteger(userInput[0])){
        decimalButton.disabled = true;
    }
}

function clear(){
    userInput = ["","",""];
    ifFirstNumberInput = true;
    decimalButton.disabled = false;
    updateDisplayField();
}

function add(number1, number2){
    userInput[0] = Math.round((Number(number1) + Number(number2)) * 100) / 100;
    clearInputAfterCalculation();
    updateDisplayField();
}

function subtract(number1, number2){
    userInput[0] = Math.round((Number(number1) - Number(number2)) * 100) / 100;
    clearInputAfterCalculation();
    updateDisplayField();
}

function multiply(number1, number2){
    userInput[0] = Math.round((Number(number1) * Number(number2)) * 100) / 100;
    clearInputAfterCalculation();
    updateDisplayField();
}

function divide(number1, number2){
    userInput[0] = Math.round((Number(number1) / Number(number2)) * 100) / 100;
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