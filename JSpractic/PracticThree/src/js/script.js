// practic 3, 1)

// let firstArr = new Array();
// let secondArr = [];

// practic 3, 2)

// let array = [1, 2, 3, 4, 5, 6, 7];
// console.log(array[4]);

// practic 3, 3)

// let output_buttton = document.querySelector('.output_button');
// let result_area = document.querySelector('.result_area');

// let array = [1, 2, 3, 4, 5, 54, 65, 23, 76];

// output_buttton.addEventListener('mouseover', function(){
//     result_area.textContent = array.length;
// })

// output_buttton.addEventListener('mouseout', function(){
//     result_area.textContent = 0;
// })

// practic 3, 4)

// let array = [1, 2, 3, 4, 5, 6, 7, 3];
// console.log(array);
// alert(`Длина массива: ${array}`);

// practic 3, 5-9)

// let firstArray = [1, 2, 3, 4, 5];
// let secondArray = [6, 7, 8, 9];
// let arrayOfSquares = [];

// let unityArray = firstArray.concat(secondArray);
// console.log(unityArray);

// let lastNumberUnityArray = unityArray.pop();
// console.log(unityArray, lastNumberUnityArray);

// unityArray.unshift(8);
// console.log(unityArray);

// let checkForANumber;

// function foo(newArray, oldArray){
//     for (let i = 0; i < oldArray.length; i++){
//         checkForANumber = isNumber(oldArray[i]);
//         if (checkForANumber === true) {
//             newArray.push(Math.pow(oldArray[i], 2));
//         } else {
//             newArray.push(NaN);
//         }
//     }
//     return newArray;
// }

// function isNumber(elem) {
//     return typeof elem === 'number' && !isNaN(elem);
// }

// arrayOfSquares = foo(arrayOfSquares, unityArray);
// console.log(arrayOfSquares);

//practic 3, 10-11)

// let nowDate = new Date();
// alert(nowDate);

// let months = [
//     'января',
//     'февраля',
//     'марта',
//     'апреля',
//     'мая',
//     'июня',
//     'июля',
//     'августа',
//     'сентября',
//     'октября',
//     'ноября',
//     'декабря'
//   ];
  
//   let currentDate = new Date();
//   let day = currentDate.getDate();
//   let monthIndex = currentDate.getMonth();
//   let year = currentDate.getFullYear();
  
//   let formattedDate = `${day} ${months[monthIndex]} ${year} года`;
  
//   console.log(formattedDate);

// practic 3, 12)

// let firstNumber = Math.floor(Math.random() * 51);
// let secondNumber = Math.floor(Math.random() * 51);
// console.log(firstNumber, secondNumber);
// let result;
// function multiply(firstNumber, secondNumber) {
//     return secondNumber * firstNumber
// }

// result = multiply(firstNumber, secondNumber);
// console.log(result);