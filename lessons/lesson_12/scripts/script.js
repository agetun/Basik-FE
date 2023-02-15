// function getName() {
//     const name = prompt("Write your name");
//     console.log(name);
// }

// // getName();


// function check() {
//     const value = prompt("Write your number");
//     if (value % 2 === 0) {
//         console.log("Yes");
//     } else {
//         console.log("No")
//     } 
     
// }

// // check();

// function print(str) {
//     console.log(str);
// }

// print("Write your name")


// function power(a, b) {
//     const result = a**b;
//     console.log(result);
// }

// power(2, 2);
// power(4, 3);
// power(5, 4);
// power(6, 2);


// function power(a, b) {
//     if (a > b) {
//         console.log(a)
//     } else if (b > a) {
//         console.log(b)
//     } else {
//         console.log("Равны")
//     }
// }

// power(7, 10)
// power(7, 5)
// power(7, 7)


// let num = 6

// function power(a, b) {
//     let result = a**b
//     console.log() // с урока дописать
// }


// if (1 === 1) {
//     var a = 123;
//     let b = 123;
// }

// console.log(`a = ${a}`);
// console.log(`b = ${b}`); error


// var a = 5; //
// a = 6;
// a = 7;
// a = 8;
// a = 9;
// a = 10;
// var a = 11;

// console.log(a)


// function power(a, b) {
//     let result = a**b;
//     // console.log(result);

//     return result
// }

// const num = power(4, 3)
// console.log(num)

// function power(a, b = 2) {
//     let result = a**b;
//     // console.log(result);

//     return result
// }

// let a = power(3)
// let b = power(4)
// let c = power(a + b, 0.5)
// console.log(c)
// console.log(power(power(3) + power(4), 0.5))


// function check(num) {
//     if (num % 2 === 0) {
//         console.log("true")
//     } else {
//         console.log("false")
//     }
// }

// check(6)

// ==============это не очень коротко=====================
// function check(num) {
//     if (num % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(check(4))
// console.log(check(7))

//===============а это совсем коротко===================
// function check(num) {
//     if (num % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
//     return a % 2 === 0
// }

// console.log(check(4))
// console.log(check(7))

// ======================funcion decl================================

// function getNewArray(a) {
//     let newArray = []
//     for (let index = 0; index < a; index++) {
//         newArray.push(index) // 0 1 2 3 4 5 6 7 8        
//     }
//     return newArray
// }

// console.log(getNewArray(9));
// console.log(getNewArray(10));
// console.log(getNewArray(50));
// console.log(getNewArray(32));

//====================funcion expression
// function getNewArray(a) {
//     let newArray = []
//     for (let index = 0; index < a; index++) {
//         newArray.push(index) // 0 1 2 3 4 5 6 7 8        
//     }
//     return newArray
// }

// const getArray = getNewArray // funcion expression

// console.log(getArray(9));
// console.log(getArray(10));
// console.log(getArray(50));
// console.log(getArray(32));

// ========================funcion expression
// const power = function(a) {
//     return a**2
// }

// console.log(power(4));

//====================================
// const obj = {
//     print1: function(a) {
//         console.log(a)
//     }    
// }

// obj.print1(123)
// obj.print1(125)
// obj.print1(22)
// obj.print1(95)

//========================================
// const obj = {
//     print1: console.log
// }

// const cout = console.log

// obj.print1(123)
// obj.print1(125)
// obj.print1(22)
// obj.print1(95)

// cout(777)

// ========================задачка два числа - получить массив

// function getNewArray(a, b) {
//         let newArray = []
//         for (let index = a; index <= b; index++) {
//             newArray.push(index) // 0 1 2 3 4 5 6 7 8        
//         }
//         return newArray
        
// }

// console.log(getNewArray(9, 15))

// ================or==============
const getNewArray = function(a, b) {
    let newArray = []
    for (let index = a; index <= b; index++) {
        newArray.push(index) // 0 1 2 3 4 5 6 7 8        
        // newArray[index] = index
    }
    return newArray
    
}

console.log(getNewArray(9, 15))
