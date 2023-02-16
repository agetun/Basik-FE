// DOM = Document Object Model

// const pValue = document.querySelector("p");
// console.log(pValue.innerText);
// pValue.innerText = "Hello world!"
// console.log(pValue.innerText)

// const paragraphs = document.querySelectorAll("p");
// console.log(paragraphs)

// for (let index = 0; index < paragraphs.length; index++) {
//     // console.log(paragraphs[index]) 
//     const p = paragraphs[index];   
//     console.log(p.innerText);
// }

// const val = document.querySelector("p");
// // console.log(val.innerText);
// val.innerText = "Hello world!";
// console.log(val.innerText);

// const val1 = document.querySelector("info_1");
// val1.innerText = "hello world!";
// console.log(val1.innerText);

// const p = document.querySelector(".main .info_1")
// p.innerText = "Hello world!"

// const paragraphs = document.querySelectorAll("p.info_1" )
// const newArray = []

// for (let index = 0; index < paragraphs.length; index++) {
//     newArray.push(paragraphs[index].innerText)
// }

// console.log(newArray)

// const img = document.querySelector("img");
// console.log(img.src);
// console.log(img.alt);
// img.setAttribute("src", "https://klike.net/uploads/posts/2019-05/1556705709_48.jpg");
// console.log(img.src);
// img.setAttribute("alt", "panda");
// img.setAttribute("data-content", "hello world");
// console.log(img.alt);


// const imgs = document.querySelectorAll(".main img");

// for (let index = 0; index < 5; index++) {  // 0 1 2 3 4 а 5 уже не подходит, так как в условии < 5
//     imgs[index].setAttribute("src", "https://klike.net/uploads/posts/2019-05/1556705709_48.jpg");
// }


// const div = document.querySelector(".main");
// const p = document.createElement("p");
// p.innerText = "Hello world";
// div.prepend(p);
// div.append(p);

const paragraphs = ["Day 1", "Day 2", "Day 3", "Day 4",]

const div = document.querySelector(".main")

for (index = 0; index < paragraphs.length; index++) {
    const p = document.createElement("p");
    p.innerText = paragraphs[index]
    div.append(p);
}


function text(a) {
    const p = document.createElement("p");
    p.innerText = "Day 1";
    return p
}
