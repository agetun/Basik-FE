//Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.
function minNumber (a, b) {
    if (a < b) {
        console.log("Minimum number: " + a);
    } else if (a > b) {
        console.log("Minimum number: " + b);
    } else {
        console.log("Значения равны " + a + " = " + b);
    }
}
minNumber (7, 5);

//Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.
function evenNumber (c, d) {
    if (c % 2 === 0) {
        console.log("Even number: " + c);
    } else if (d % 2 === 2 ) {
        console.log("Even number: " + d);
    } else {
        console.log("Not even number");
    }
}
evenNumber(8, 7);

//Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени. Значение степени должно быть указано по умолчанию 2.
function power(a1, b1) {
    let c1 = a1 ** b1;
    return c1;
}
let result = power(4, 2)
console.log(result);

