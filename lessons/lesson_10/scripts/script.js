// const value_1 = prompt("Write first number");
// const value_2 = prompt("Write second number");

// if (value_1 > value_2) {
//     console.log("Value1 is bigger than value2");
// } else if (value_1 < value_2) {
//     console.log("Value2 is bigger than value1")
// } else {
//     console.log("Value1 is equel to value2")
// }


// const value_3 = prompt("Write number");

// if (value_3 > 0) {
//     console.log("Value3 is bigger than 0");
// } else if (value_3 < 0) {
//     console.log("Value3 is small than 0")
// } else {
//     console.log("Value3 is equel to 0") 
// }
 
// const value = +prompt("Write a number")

// console.log(isNaN(value));
// console.log(isNaN("5"));
// console.log(isNaN("assaa"));
// console.log(isNaN("NaN"));

// const value_4 = prompt("Введите число")

// if (isNaN(value_4)) {
//     console.log("Это значение которое нельзя преобразовать в число")
// } else {
//     console.log("Это значение можно преобразовать в число")
// }

// && = and
// || = or

// console.log(true && false) // false
// console.log(true || false) // true

// const value_5 = prompt("Write a number");

// if (value_5 < 0 || value_5 > 0) {
//     console.log("not equal 0")
// } else {
//     console.log("equa 0")
// }

// const value_6 = prompt(Day year)

// if (value_6 <= 365) {
//     console.log("Год не высокосный")
// } else {
//     console.log("Год высокосный")
// }

// const year = prompt("Write year")

// if ((year % 400 === 0)) {
//     console.log("высокосный")
// } else if (year % 100 === 0) {
//     console.log("не высокосный")
// } else if (year % 4 === 0) {
//     console.log("высокосный")
// } else {
//     console.log("не высокосный")
// }


// if (year % 400 === 0 || (year % 4 === 0 && year % 100 != 0)) {
//     console.log("высокосный")
// }  else {
//     console.log("не высокосный")
// }

//============================массивы=================

// const arr = [21, 54, 856, 812, 412];
// console.log(arr)
// arr[4] = 500
// arr[5] = 600
// // console.log(arr)
// // arr.push(700)  // add new el from end
// console.log(arr)
// console.log(arr.pop()) // возвращает последний елемент и вырыват его из массиваю, из массива удаляет
// arr.unshift(11, 10, 987) // добавляет впереди три елемента
// console.log(arr.shift()) // удаляет и возвращает в консоль (или выводит в консоль) и вырывает ПЕРВЫЙ елемент массива
// console.log(arr)

// const arr1 = []

// const value_1 = +prompt("Write a number")
// const value_2 = +prompt("Write a number")
// const value_3 = +prompt("Write a number")

// arr1.push(value_1, value_2, value_3)
// console.log(arr1)

// const arr2 = [1, 4, 2, 5, 3]
// const arr3 = []
// arr3[0] = arr2[0]**2
// arr3[1] = arr2[1]**2
// arr3[2] = arr2[2]**2
// arr3[3] = arr2[3]**2
// arr3[4] = arr2[4]**2
// console.log(arr2)
// console.log(arr3)

//варианты добавления единицы или увеличения на 1 (ш += 7 - увеличивает на 7)
// let i = 0
// i = i + 1
// i += 1
// i++
// for (let i = 0; i < 10; i = i + 1) {
//     console.log(i)
// }

// const arr4 = [9, 15, 4, 8, 65, 0, 85, 52]
// for (let i = 0; i < arr4.length; i++) {
//     console.log(arr4[i])  // выводит все елементы массива в консоль
// }

// const arr5 = [9, -15, 4, 8, -65, 0, -85, 52]

// for (let index = 0; index < arr5.length; index++) {
//     if (arr5[index] >= 0) {    // набрать с фотки для понимания
//         console.log(arr5[index])
//     }
// }

// for (let index = 0; index < 20; index++) {
//     if (index % 2 == 0) {
//         console.log(index)
//     }
// }

// for (let index = 20; index >= 0; index--) {
//         console.log(index)
    
// }

const arr6 = [9, 15, 4, 8, 65, 0, 85, 52]
for (let index = arr6.length - 1; index >= 0; index--) {
    console.log(arr6[index])
}


