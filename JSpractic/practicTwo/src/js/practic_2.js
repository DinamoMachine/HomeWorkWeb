// practic 2, 1)
// function greetings() {
//     alert ("Приветсвуем на нашем сайте!")
// }
// greetings();

//practic 2, 2)
function sendMessageEvent(){
    let name = prompt("Как вас зовут?");
    alert("Привет, " + name);
}


//practic 2, 3)

// function min(a, b){

//     if (a < b) return console.log(a);
//     if (a > b) return console.log(b);

// }

// let a = prompt("Введите число а: ");
// let b = prompt("Введите число b: ");
// min(a, b);

//practic 2, 4

// function quadraticEquation(a, b, c){

//     let discriminant = b * b - 4 * a * c;
//     console.log(discriminant);
//     let rootOne = (-b + Math.sqrt(discriminant)) / 2 * a;
//     let rootTwo = (-b - Math.sqrt(discriminant)) / 2 * a;
//     if (discriminant > 0) return console.log(rootOne, rootTwo, " корни уравнения");
//     if (discriminant < 0) return console.log("корни отсутвуют");
//     if (discriminant == 0) return console.log(-b/2*a);

// }

// let a = Number(prompt("Введите число а: "));
// let b = Number(prompt("Введите число b: "));
// let c = Number(prompt("Введите число c: "));

// if (!a) {
//     while(!a) a = Number(prompt("Введите число а: "));
    
// } 
// if (!b) {
//        while (!b) b = Number(prompt("Введите число b: "));
// }
// if (!c) {
//     while(!c) c = Number(prompt("Введите число c: "));
//  }

// quadraticEquation(a, b, c);

// calculator

let buttons = document.querySelectorAll('.numberButton');
let equals = document.querySelector('.equals');
let result_area = document.querySelector('.result_area');
let minus = document.querySelector('.math_operation_minus');
let plus = document.querySelector('.math_operation_plus');
let clear = document.querySelector('.clear')

for(const elem of buttons) {
    elem.addEventListener('click', function(){
        if (Number (result_area.value) === 0) {
            result_area.value = elem.textContent;
        } else{
            result_area.value += elem.textContent;
        }
    });

}

let tempResult = 0;
let flag = true;
minus.addEventListener('click', function(){
    tempResult = result_area.value;
    result_area.value = 0;

    flag = false;
    minus.disabled = true;
    plus.disabled = true;
});

plus.addEventListener('click', function(){
    tempResult = result_area.value;
    result_area.value = 0;

    flag = true;
    minus.disabled = true;
    plus.disabled = true;
})

equals.addEventListener('click', function(){
    if (flag) result_area.value = Number(result_area.value) + Number(tempResult);
    else result_area.value = Number(tempResult) - Number(result_area.value);

    minus.disabled = false;
    plus.disabled = false;
})

clear.addEventListener('click', function(){
    tempResult = 0;
    result_area.value = 0;

    minus.disabled = false;
    plus.disabled = false;
})