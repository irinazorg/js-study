"use: strict"; 

var number = 5;
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