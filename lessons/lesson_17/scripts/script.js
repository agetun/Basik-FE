// const div = document.querySelector("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.backgroundColor = "blue";

// div.addEventListener("mouseover", function() {
//     div.style.backgroundColor = "white";
// })

// div.addEventListener("mouseover", function() {
//     div.style.backgroundColor = "green";
// })

// console.log(Math.random()); //с 0 до 1
// console.log(Math.random() * 3); // (0, 3)
// console.log(Math.floor(Math.random() * 7));

// const div = document.querySelector("div");
// div.style.width = "100px";
// div.style.height = "100px";
// div.style.border = "1px solid black"

// div.addEventListener("mouseover", function() {
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     const rgb = `rgb(${r}, ${g}, ${b})`;
//     div.style.backgroundColor = rgb;        
//     })

//     div.addEventListener("mouseout", function() {
//         div.style.backgroundColor = "white";
//     })

// const mainDiv = document.querySelector(".main");

//  for (let index = 0; index < 5; index++) {
//     const newDiv = document.createElement("div");
//     newDiv.style.width = "150px";
//     newDiv.style.height = "150px";

//     const b = Math.floor(Math.random() * 256);
//     const rgb = `rgb(128, 128, ${b})`;
//     newDiv.style.backgroundColor = rgb;
//     mainDiv.append(newDiv);
        
//  }


// const form = document.querySelector("form");

// form.addEventListener("submit", function(event) {
//     // console.log("Submitted");
//     event.preventDefault();

//     const productName = document.querySelector("#productName");
//     const productPrice = document.querySelector("#productPrice");

//     console.log("productName: " + productName.value);
//     console.log("productPrice: " + productPrice.value);
// })

const form = document.querySelector("form");
const products = []

form.addEventListener("submit", function(event) {
    // console.log("Submitted");
    event.preventDefault();

    const productName = document.querySelector("#productName");
    const productPrice = document.querySelector("#productPrice");

    // console.log("productName: " + productName.value);
    // console.log("productPrice: " + productPrice.value);

    const product = {
        name: productName.value,
        price: productPrice.value,
    }
    products.push(product);

    // const productCardElem = document.createElement("div");
    // const productCardElem = document.createElement("h2");
    // const productCardElem = document.createElement("p");


})