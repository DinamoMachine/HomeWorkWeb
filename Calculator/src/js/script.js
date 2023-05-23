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


function unblockedButtons(array){
    for (const button of array){
        button.disabled = false;
    }
}

function blockedButtons(array){
    for (const button of array){
        button.disabled = true;
    }
}

function getTempResult(){
    tempResult = result.textContent;
    result.textContent = 0;
}

function adaptiveFontSize(lenResult){
    if (lenResult <= 8){
        result.style.fontSize = '50px';
    }

    if (lenResult > 8){
        result.style.fontSize = '40px';
    }

    if (lenResult > 10){
        result.style.fontSize = '30px';
    }

    if (lenResult > 14){
        result.style.fontSize = '25px';
    }

    if (lenResult >= 18){
        result.style.fontSize = '20px';
    }

    result.textContent = result.textContent.substring(0, 21);
}

// function pasteSpace(str){
//     let strArr = str.split('');
//     let splitResult = '';
//     console.log(strArr);
//     for (let i = strArr.length - 1; i >= 0; i--){
//         if (i % 3 === 0){
//             splitResult += strArr[i];
//             splitResult += ' ';
//         } else {
//             splitResult += strArr[i];
//         }
//     }
//     console.log(splitResult);
//     return splitResult;
// }

for(const elem of buttons) {
    elem.addEventListener('click', function(){
        if (Number (result.textContent) === 0 && result.textContent.length === 1) {
            result.textContent = elem.textContent;
        } else {
            result.textContent += elem.textContent;
        }

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
        blockedButtons(operations);
        unblockedButtons(buttons);

        adaptiveFontSize(result.textContent.length);
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
            result.textContent = Number(tempResult) / Number(result.textContent);
            break;
        default:
            result.textContent = tempResult;
            break;

    }

    unblockedButtons(operations);
    adaptiveFontSize(result.textContent.length);
    // result.textContent = pasteSpace(result.textContent);


})

signСhange.addEventListener('click', function(){
    result.textContent *= -1;
    unblockedButtons(buttons);
})

procent.addEventListener('click', function(){
    result.textContent /= 100;

    adaptiveFontSize(result.textContent.length);
    unblockedButtons(buttons);
})

point.addEventListener('click', function(){
    if (result.textContent.indexOf('.') == -1) result.textContent += '.'; 
})

clear.addEventListener('click', function(){
    tempResult = 0;
    result.textContent = 0;

    adaptiveFontSize(result.textContent.length);
    unblockedButtons(operations);
    unblockedButtons(buttons);
})