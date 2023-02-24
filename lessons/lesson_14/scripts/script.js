// function newParagraph(text) {
//     const p = document.createElement("p");
//     p.innerText = text;
//     return p;
// }

// const div = document.querySelector("div.main") // <div class="main">...</div>

// for (let index = 0; index < paragraphsTexts.length; index++) {
//     const p = document.createElement("p") // <p>innerText</p>
//     p.innerText = paragraphsTexts[index] // => "Day 1" // <p>Day 1</p>
//     div.append(p)
//     div.append(newParagraph(paragraphsTexts[index]))


// }

// написать функцию которая принимает текст как аргумент создает параграф с этим текстом и возвращает этот параграф и в цикле сделать div.append(новый параграф)


// const urlToPost = prompt("Give url to post");
// const imgUrl = prompt("Give url to img");

// const newImg = document.createElement("img");
// newImg.setAttribute("href", imgUrl);

// const newA = document.createElement("a");
// newA.innerText = "Url to post";
// newA.setAttribute("href", urlToPost);

// const div = document.querySelector("div.main");
// div.append(newA, newImg);

// const product = [
//     {
//         name: "Laptop",
//         img: "https://www.notebookcheck.com/uploads/tx_nbc2/SL4_AMD_1.jpg",
//         count: 15,
//         unitPrice: 500
//     },
//     {
//         name: "Notebook",
//         img: "https://m.media-amazon.com/images/I/71pU5bpfq8L._AC_SY450_.jpg",
//         count: 15,
//         unitPrice: 400
//     },
// ]

// const mainDiv = document.querySelector("div.main");

// for (let index = 0; index < product.length; index++) {
//     const pName = document.createElement("p");
//     pName.innerText = product[index].name;

//     const img = document.createElement("img");
//     img.setAttribute("src", product[index].img);

//     const div = document.createElement("div");
//     div.append(p, img);

//     mainDiv.append(div);
    
// }

// function beautyPrint(result) {
//     console.log(`Значение result: ${result}`)
// }

// function sum (a, b, print) {
//     const c = a + b
//     print(c)
//     return c
// } 
// const aValue = 1
// const bValue = 3

// sum(aValue, bValue, beautyPrint)

function sum(a, b, p) {
    const c = a + b 
    const result = p(c)
    console.log(result)
}

function divide(result) {
    return result / 2
}
sum(1, 3, divide)