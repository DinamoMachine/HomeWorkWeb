let buttons = document.querySelectorAll('.digital_button');
let operations = document.querySelectorAll('.operation');
let clear = document.querySelector('.clear_button');
let signСhange = document.querySelector('.choice_sign_button');
let procent = document.querySelector('.procent_button');
let point = document.querySelector('.decimal_point');
let divide = document.querySelector('.divide_button');
let multiply = document.querySelector('.multiply_button');
let minus = document.querySelector('.minus_button');
let plus = document.querySelector('.plus_button');
let equals = document.querySelector('.equals_button');
let result = document.querySelector('.result_area');


function unblockedButtons(array) {
    for (const button of array){
        button.disabled = false;
    }
}

function blockedButtons(array) {
    for (const button of array){
        button.disabled = true;
    }
}

function getTempResult() {
    tempResult = result.textContent;
    result.textContent = 0;
}

function getMaxLenNumber() {
    if (result.textContent[0] === '-') {
        result.textContent = result.textContent.substring(0, 10);
    } else {
        result.textContent = result.textContent.substring(0, 9);
    }
}

function convertToExponentialNumber(result) {
    return Number(result).toExponential(0);
}

function adaptiveFontSize(lenResult) {
    if (lenResult <= 8){
        result.style.fontSize = '52px';
    }
    if (lenResult == 9){
        result.style.fontSize = '46px';
    }
    if (lenResult == 10){
        result.style.fontSize = '43px';
    }
}

for(const elem of buttons) {
    elem.addEventListener('click', function(){
        if (Number (result.textContent) === 0 && result.textContent.length === 1) {
            result.textContent = elem.textContent;
        } else {
            result.textContent += elem.textContent;
        }

        unblockedButtons(operations);
        getMaxLenNumber();
        adaptiveFontSize(result.textContent.length);
    })
}


let tempResult = 0;
let operationSwitch = '';

for(const operation of operations){
    operation.addEventListener('click', function(){
        getTempResult();
        operationSwitch = operation.textContent;

        point.disabled = false;
        // equals.disabled = false;
        blockedButtons(operations);
        unblockedButtons(buttons);
    })
}

equals.addEventListener('click', function(){

    switch(operationSwitch) {
        case '-':
            result.textContent = Number(tempResult) - Number(result.textContent);
            
            break;
        case '+':
            result.textContent = Number(tempResult) + Number(result.textContent);
            break;
        case '×':
            result.textContent = Number(tempResult) * Number(result.textContent);
            break;
        case '÷':
            if (Number(result.textContent) === 0){
                result.textContent = "ERROR";
            } else {
                result.textContent = Number(tempResult) / Number(result.textContent);
            }
            break;
        
    }

    if (result.textContent.length >= 10 && (result.textContent.length >= 10 && result.textContent[0] != '-')) {
        result.textContent = convertToExponentialNumber(result.textContent);
    }
    
    adaptiveFontSize(result.textContent.length);
    unblockedButtons(operations);
    // equals.disabled = true;
    
})

signСhange.addEventListener('click', function(){
    result.textContent *= -1;

    adaptiveFontSize(result.textContent.length);
    unblockedButtons(buttons);
})

procent.addEventListener('click', function(){
    result.textContent /= 100;
    if (result.textContent.length >= 10) {
        result.textContent = convertToExponentialNumber(result.textContent);
    }

    unblockedButtons(buttons);
})

point.addEventListener('click', function(){
    if (result.textContent.indexOf('.') == -1) result.textContent += '.'; 
})

clear.addEventListener('click', function(){
    tempResult = 0;
    result.textContent = 0;
    // equals.disabled = false;

    unblockedButtons(operations);
    unblockedButtons(buttons);
})