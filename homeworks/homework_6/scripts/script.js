// Напишите цикл for, который выводит консоль каждое второе число от 0 до 10
const arr_1 = [3, 7, 9, 12, 25, 37, 99, 45, 8, 14];

for (let index = 0; index < arr_1.length; index++) {
    if (index % 2 === 1) {
        let element = arr_1[index];
        console.log(element);
    }
    
}

// Напишите цикл for, который выводит в консоль  все числа от 55 до 20
console.log("==========все числа от 55 до 20================")

for (let index = 0; index < arr_1.length; index++) {
    if (arr_1[index] < 55 && arr_1[index] > 20) {
        let element = arr_1[index];
        console.log(element);
    }
    
}

// Дан массив numbers. Вывести в консоль все числа из массива
// const numbers = [3, 5, 11, 2, 8, 1, 6];
console.log("==========все числа из массива================")
const numbers = [3, 5, 11, 2, 8, 1, 6];
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element)
    
}
//Сформировать новый массив numberssquared и передать в него все элементы из массива numbers, возведенные в квадрат
console.log("все элементы из массива numbers, возведенные в квадрат")
let numberssquared = [];
for (let index = 0; index < numbers.length; index++) {
    let element = numbers[index] ** 2;
    console.log(element)
    //Создать переменную lastelem и передать в нее последний элемент из сформированного массива numbers_squared (обратиться к элементу массива по индексу)
      if (index === numbers[6]) {
        let lastelem = numbers[index] ** 2;
        console.log("Переменная lastelem, переданный в нее последний элемент " + lastelem);
    }
    
}
/* Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is  . He is  years old’


const user = {
firstname: 'Ivan', 
lastname: 'Ivanov', 
age: 20, 
salary: 500
} */

const user = {
    firstname: 'Ivan',
    lastname: 'Ivanov',
    age: 20,
    salary: 500
}
console.log(`User's name is ${user['firstname']} ${user['lastname']}. He is years old ${user['age']}.`)