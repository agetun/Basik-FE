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
evenNumber (8, 7);


