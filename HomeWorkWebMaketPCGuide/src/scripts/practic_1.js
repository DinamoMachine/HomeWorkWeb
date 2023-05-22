let a = 'a';
alert (typeof (a));


// практика 1, 1)
let choice = prompt ("Вы разбираетесь в компьютерах?");
switch (choice) {
    case 'да':
        alert("Отлично, не будем мешать!");
        break;
    case 'нет':
        alert("Ничего страшного! Мы вам поможем.");
        break;
}

// практика 1, 2)

let number = 1;
while (number != 41){
    console.log(number + " for while");
    number += 1;
}

for (number = 1; number != 41; number++){
    console.log(number + " for for");
}
number = 1;

do {
    console.log(number + " for do...while");
    number += 1;
} while (number != 41);

// практика 1, 3)

/*while(true){
    alert('REPEAT');
} */

// практика 1, 4)

let arr = [prompt()];
console.log(arr[0]);