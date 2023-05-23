// let a = 'a';
// alert (typeof (a));


// практика 1, 1)
// let choice = prompt ("Вы разбираетесь в компьютерах?");
// switch (choice) {
//     case 'да':
//         alert("Отлично, не будем мешать!");
//         break;
//     case 'нет':
//         alert("Ничего страшного! Мы вам поможем.");
//         break;
// } 

// практика 1, 2)

// let number = 1;
// while (number != 41){
//     console.log(number + " for while");
//     number += 1;
// }

// for (number = 1; number != 41; number++){
//     console.log(number + " for for");
// }
// number = 1;

// do {
//     console.log(number + " for do...while");
//     number += 1;
// } while (number != 41);

// практика 1, 3)

// while(true){
//     alert('REPEAT');
// }

// практика 1, 4)

// let arr = [];
//  for (let i = 0; i < 3; i++){
//      arr[i] = prompt("Введите число");
//  }
//  let temp;
//  for (i = 0; i < arr.length; i++){
//      for (let j = 0; j < arr.length - 1; j++){
//          if (arr[j] > arr[j+1]){
//             temp = arr[j];
//              arr[j] = arr[j+1];
//              arr[j+1] = temp;
//          }
//      }
//  }
//  console.log(arr); 

//практика 1, 5

// let number = 0;

// while (number <= 15){

//     if (number % 2 == 0) {
//         console.log(number + " - четное число")
//     }
//     else{
//         console.log(number + " - не четное число")
//     }
//     number++;
// } 

//практика 1, 6

// let number = prompt("Введите число, больше 5-и: ");
// if (number > 5) alert("поздравляем, вы ввели правильное число!");
// else alert('помните, что пользователь может нажать "отмена"?');

// практика 1, 7

// let number = 8;
// while (number <= 20){

//     if (number % 2 == 0){
//         console.log(number);
//     }
//     number++;

// }


// практика 1, 8

// let sum = 0;

// for (let number = 0; number < 1000; number++){
//     if (number % 3 == 0 && number % 5 == 0) continue;
//     if (number % 3 == 0) sum += number;
//     if (number % 5 == 0) sum += number;
// }
// console.log(sum);

// практика 1, 9

// let number = prompt("введите трехзначное число: ");
// let numbercopy = number;
// let sum = 0, temp;

// while (number > 0){

//     temp = number % 10;
//     sum += Math.pow(temp, 3);
//     number = parseInt(number / 10);

// }
// console.log(sum);

// практика 1, 10

// let countFloor = 5;
// let currentFloor = "";
// while (countFloor > 0){

//     currentFloor += "* "
//     console.log(currentFloor);
//     countFloor--;

// }
