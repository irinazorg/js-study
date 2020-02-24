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
if (2*4 == 7) {
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