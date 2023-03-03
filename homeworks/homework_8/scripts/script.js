/* Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers. */
const div = document.querySelector("div.numbers");

for (let index = 100; index >= 50; index -= 10) {
    const p = document.createElement("p");
    p.innerText = index;
    div.append(p);  
    console.log(p)  
}

// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом stringscontainer. Строки взять произвольные.
const newArr = [
    "Line 1",
    "Line 2",
    "Line 3",
    "Line 4",
    "Line 5",
];
const stringscontainerDiv = document.querySelector(".stringcontainer");

for (let index = 0; index < newArr.length; index++) {
    const newPar = document.createElement("p");
    newPar.innerText = newArr[index];
    
    stringscontainerDiv.append(newPar);    
}


//Написать цикл, который проходится по массиву с объектами - у объектов свойства firstname, lastname и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. Добавить все карточки в div с классом userscontainer.
// function task3() {
//     const persons = [
//         {firstname: "Ivan", lastname: "Ivanov", age: 14},
//         {firstname: "Sergey", lastname: "Sanov", age: 18},
//         {firstname: "Andrey", lastname: "Petrov", age: 22},
//         {firstname: "Andrey", lastname: "Petrov", age: 22},
//     ];

//     const div = document.querySelector(".userscontainer");

//   for (let i = 0; i < persons.length; i++) {
//     const { firstname, lastname, age } = persons[i];
//     if (age >= 18) {
//       const divCard = document.createElement("div");
//       divCard.classList.add("card");
//       divCard.append(
//         createParagraph("First name: " + firstname),
//         createParagraph("Last name: " + lastname),
//         createParagraph("Age: " + age)
//       );

//       div.append(divCard);
//     }
//   }
// }
// task3();