function task1(min, max) {
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
        
    }

    return result
}

const test1 = task1(1, 2);
console.log(test1)

const test2 = task1(0, 10)
console.log(test2)

const test3 = task1(10, 0)
console.log(test3)

