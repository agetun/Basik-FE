// console.log("Hello world");

// const name = prompt("Write your name");
// console.log("Hello " + name);
// console.log(`Hello ${name}.How are you`);

// console.log(5);
// console.log("5");

// console.log(typeof(name));
// console.log(typeof(7));
// console.log(typeof name);
// console.log(typeof 7);


// const r = 12;
// const g = 34;
// const b = 14;
// console.log("rgb("  + r, g, b + ");");
// console.log(`rgb(${r} ${g} ${b});`);

// ===========part 2 ===================
// const value_1 = 12;
// const value_2 = 4;

// console.log(value_1 + value_2);
// console.log(value_1 - value_2);
// console.log(value_1 * value_2);
// console.log(value_1 / value_2);
// console.log(value_1 % value_2);
// console.log(value_1 ** value_2);


// console.log("============преобразование переменных==============")
// let a =2;  // number
// let b = "2";  // string
// console.log(typeof String(a)); 
// console.log(typeof Number(b));
// console.log(typeof+b);
// console.log(typeof(""+a));

// console.log("2 + 2"); // числовой в string // "22"
// console.log("2" - 2); // string in number // 2-2=0 

// console.log("============преобразование строки в число==============")

// console.log(Number("a")); //NaN = Not a number
// console.logt(NaN);  // Not a number

// console.log("b" + "a" + Number("c") + "a");  // ba +NaN + a

//==============================================================
// 

// let old = prompt("How old are you ");
// let oldMinut = old * 525600;
// console.log()

// const num = prompt("Number - ");
// console.log(num ** 2);

// const num_1 = prompt("Write first number")
// const num_2 = prompt("Write second number")

// console.log(`num_1 + num_2 = ${+num_1 + +num_2}`)

const a = "2";
const b = 2;

// if (a==b) {  // переводит в два числа 2 = 2
//     console.log("a = b");
// }

console.log(a == b) // true преобразует в число и сравнивает
console.log(a === b);  // false string сначала сравнивает типы переменных потом их значение


if (a == b) {
    console.log("a = b");
} else {
    console.log("a не равно b")
}

if (a === b) {
    console.log("тип а равно типу b");
} else {
    console.log("тип a не равно типу b")
}

if (a>b) {
    console.log("a больше b")
} else {
    console.log("a меньше b")
}

if (a<b) {
    console.log("a меньше b")
} else {
    console.log("a больше b")
}