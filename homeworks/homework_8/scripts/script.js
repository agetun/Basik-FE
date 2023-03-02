/* Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). Добавить созданные параграфы в div с классом numbers. */
const div = document.querySelector("div.numbers");

for (let index = 100; index > 50; index = index - 10) {
    const p = document.createElement("p");
    p.innerText = index;
    div.append(p);  
    console.log(p)  
}

