let options = {
    width: 1024,
    height: 800,
    name: "text"
};

console.log(options.name);

options.bool = true;
options.colors = {
    border: "black",
    bg: "red"
};

delete options.width;

console.log(options);

for (let key in options) {
    console.log("Свойство " + key + " имеет значение " + options[key]);
}

console.log(Object.keys(options).length);

/* let arr = [1, 2, 3, 4, 5];

arr.pop();
console.log(arr);

arr.push("5");
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift("1");
console.log(arr); */

/*let arr = [1, 2, 3, 4, 5];
arr[99] = 99;
console.log(arr.length);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}*/

let arr = ["one", 2, 3, "four", 5];

arr.forEach(function(item, i, mass) {
    console.log(i + ": " + item  + " (массив: " + mass + ")");
});
console.log(arr);

// -------------------------------
let arr1 = [1, 2, 3, 6, 9, 21];

// получаем ключи
for (let key in arr1) { 
    console.log(key);
}

// получаем значения
for (let key of arr1) {
    console.log(key);
}

// получаем данные от пользователя
let ans = prompt(","),
    arr2 = [];

arr2 = ans.split(",");
console.log(arr2);

// отправляем данные одной строкой
let arr3 = ["one", "two", "three", "four"],
    i = arr3.join(', ');
console.log(i);

// сортировка по алфавиту строк
let arr4 = ["one", "two", "three", "four"],
    i4 = arr4.sort();
console.log(i4);

// сортировка по алфавиту цыфр
let arr5 = [25, 14, 100, 1, 6, 0, 1000],
    i5 = arr5.sort(compareMun);

function compareMun(a, b) {
    return a-b;
}
console.log(i5);