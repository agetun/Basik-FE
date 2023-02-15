// Написать программу, которая через prompt считывает число и выводит в консоль число равное 10% от введенного числа
let number_1 = prompt("Write number");
number_1 = (number_1 - (number_1 * 10 / 100));
console.log("Результат введённого числа уменьшенного на 10% " + number_1);

//Написать программу, которая получает два числа и выводит наименьшее
let num_1 = prompt("Write first number");
let num_2 = prompt("Write second number");

if (num_1 < num_2) {
    console.log("Наименьшее число " + num_1);
} else if (num_1 > num_2) {
    console.log("Наименьшее число " + num_2);
} else {
    console.log("Числа равны")
}

//Написать программу, которая считывает через prompt число и выводит одно из следующих сообщений: ‘Число меньше 100’, ‘Число больше 100’ или ‘Число равно 100’
let number_2 = prompt("Write number");
if (number_2 < 100) {
    console.log("Число меньше 100")
} else if (number_2 > 100) {
    console.log("Число больше 100")
} else {
    console.log("Число равно 100")
}

//Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) и выводит в консоль сообщение ‘Hello, ’, если пользователь совершеннолетний, или ‘Hi, ’, если пользователь несовершеннолетний.
let name = prompt("Write your name");
let age = prompt("How old are you?");

if (age > 18) {
    console.log("Hello, " + name + "!");
} else {
    console.log("Hi, " + name + "!");
}

//Создайте массив из строк, чисел, NaN и объектов. Пример: ['hello', 1, { name: 'John' }, 'world', 2, { name: 'Jane' }, NaN]
// Задача 1
// Пройдитесь по массиву циклом for и выведите в консоли, чем является каждый элемент массива: строкой, числом или ни тем, ни другим (используя функции isNaN и typeof).
// const arr = ['hello', 1, {name: 'John'}, 'world', 2, {name: 'Jane'}, NaN];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     // console.log(element)
//     console.log("Элемент " + index + " строка " + isNaN(arr[index]));
//     console.log("Элемент " + index + " имеет тип " + typeof(arr[index]))

//     let sum = 0
//     if (arr[index] > 0) {
//         sum = element + arr[index]
//         // console.log(sum)
//     }
//     console.log(sum)
   
// }

//Задача 2
// Просуммируйте все числа в массиве и выведите результат в консоли. Игнорируйте нечисловые элементы.


