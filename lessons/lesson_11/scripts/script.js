// const arr = [5, 6, 8, 1, 51, 2, 51, -52];
// let sum0Elements = 0;

// for (let index = 0; index < arr.length; index++) {
//    let element = arr[index];
//    sum0Elements += element; 
//    sum0Elements += arr[index] // это краткая запись
//    sum0Elements = sum0Elements + arr[index] // можно и так
// }

// console.log(sum0Elements);

// for (let index = 0; index < arr.length; index++) {
//     if (arr[index] >= 0)  
//     sum0Elements += arr[index]
// }

// console.log(sum0Elements);

// const arr = [5, 6, 8, 1, 51, 2, 51, -52];
// let evenSum = 0;
// let = oddSum = 0;


// for (let index = 0; index < arr.length; index++) {
//     const elem = arr[index]
//     if (elem % 2 == 0) evenSum += elem
//     else oddSum += elem
// }

// let diff = 0;
// if (evenSum > oddSum) {
//     diff = evenSum - oddSum
// } else {
//     diff = oddSum - evenSum
// }

// console.log(`oddSum = ${oddSum}`)
// console.log(`evenSum = ${evenSum}`)
// console.log(`dif = ${diff}`)


// const arr = [1, 34, 52, 4, 9, -5, 6, 59, 52, 9, 20, 12, 65, 13]
// let elemIndex = 0;

// for (let index = 0; index < arr.length; index++) {
//     if (index == arr[index]) {
//         elemIndex = elemIndex + arr[index]
//     }
// }

// console.log(elemIndex)

// const arr = [1, 34, 52, 4, 9, -5, 6, 59, 52, 9, 20, 12, 65, 13]
// let sum = 0;

// for (let index = 0; index < arr.length; index++) {
//     if (index === arr[index]) {
//         sum += arr[index]
//     }
// }

// console.log(sum)

// const person = ["John", "Smith", 37, 175]
// console.log(`Name ${person[0]}`)
// console.log(`Second Name ${person[1]}`)
// console.log(`Age ${person[2]}`)
// console.log(`Height ${person[3]}`)


// const person = {
//     name: "John",
//     secondName: "Smith",
//     age: 37,
//     height: 175
// }
// //objekt
// console.log(`Name ${person['name']}`)
// console.log(`Second Name ${person['secondName']}`)
// console.log(`Age ${person['age']}`)
// console.log(`Height ${person['height']}`)
// console.log(person)
// console.log(`Name ${person.name}`)
// console.log(`Second Name ${person.secondName}`)
// console.log(`Age ${person.age}`)
// console.log(`Height ${person.height}`)

// person.name = "Jake"
// person.professional = "programmer"

// console.log(person.age)
// console.log(person.gender)

const products = [
{
    name: "Laptop",
    price: 1500,
    discount: 10,
    type: "electronika",
},
{
    name: "Pc",
    price: 2000,
    discount: 10,
    type: "electronika",
},
{
    name: "Blender",
    price: 500,
    discount: 50,
    type: "electronika",
},
{
    name: "Tennis Table",
    price: 3200,
    discount: 0,
    type: "sport",
},
{
    name: "A4 Paper",
    price: 50,
    discount: 0,
    type: "office product",
},
]

// console.log(products)

// for (let index = 0; index < products.length; index++) {
//     console.log(products[index].price)
// }

// for (let index = 0; index < products.length; index++) {
//     console.log(`Products of ` + products[index].title + " Price " + products[index].price)
// }

// let totalPrice = 0;
// for (let index = 0; index < products.length; index++) {
//     console.log(`Sum price ` + products[index].price)
//     totalPrice += products[index].price 
// }

// console.log(totalPrice)

let newProducts = 0;
// let totalPrice = 0;
for (let index = 0; index < products.length; index++) {
    // const {name, price, discount} = products[index] // деструктуризация
    // console.log(`Price of ${name} is ${price - price * (discount / 100)}`)
    // totalPrice += price

    const {type} = products[index]
    if (type === "sport") {
        newProducts.push(newProducts[index])
    }
}
    console.log(`Sum price ` + products[index].price)
    totalPrice += products[index].price 


console.log(`Total price: ${totalPrice}`)

// основная цена - (основная цена * скидка / 100)









