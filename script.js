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