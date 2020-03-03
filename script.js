"use: strict"; 

/* var number = 5;
var string = "Hello!";
var symbol = Symbol();
var boolean = true;
// null;
// undefined;
var object = {};

let persone = {
    name: "Вася",
    age: 24
};

// console.log(persone.name);
// alert("Hello!");
// confirm("Are you here?");
// let answer = +prompt("How old are you?", "");
// console.log(typeof(answer));

let incr = 10;
let decr = 10;

console.log(incr++);
console.log(decr++);
console.log("2" === 2);

let isChecked = false,
    isClose = false;

console.log(isChecked || !isClose);
*/

// Условия
/* if (2*4 == 7) {
    console.log("Верно!");
} else {
    console.log("Неверно!");
}

let num = 50;

if (num < 49) {
    console.log("Неверно!");
} else if (num > 100) {
    console.log("Много!");
} else {
    console.log("Верно!");
}

(num == 50) ?  console.log("Верно!") : console.log("Неверно!");

switch (num) {
    case num < 49:
        console.log("Неверно!");
        break;
    case num > 100:
        console.log("Много");
        break;
    case num > 80:
        console.log("Все еще много");
        break;
    case 50:
        console.log("Верно!");
        break;
    default: console.log("Что-то пошло не так");
        break;
}
*/

// Циклы
// let num = 50;
// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i == 6) {
//         continue;
//     }
//     console.log(i);

// }

// Функции
/*
let num = 20;

function showFirstMessage(text) {
    alert(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Привет");

console.log(num);
*/

// function declaration
/* function calc(a,b) {
    return (a + b);
}
*/

// function expression 
/*var calc = function(a, b){
    return (a + b);
}*/

// ES 6
let calc = (a,b) => (a + b);

console.log(calc(3, 4));
console.log(calc(20, 100));

function retVar() {
    let num = 50;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "tEsT";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

let twelve = "12.2px";
// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));