// function sum(a, b, p) {
//     const c = a + b //
//     const result = p(c) // result = c
//     console.log(result);
// }

// function divide(result) {
//     return result / 2
// }

// sum(1, 3, divide)

// const arr = [1, 2, 3, 4, 5];

// function printArray(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
        
//     }
//     callback()
// }

// function endResultPrint() {
//     console.log("Finished");
// }

// printArray(arr, endResultPrint)

//===========================================
// const arr1 = [1, 2, 3, 4, 5];

// function printArray(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         callback(arr1[i])
//     }
    
// }

// function pow(a) {
//     console.log(a ** 2);
// }

// printArray(arr1, pow)

//============================================
// const arr1 = [1, 2, 3, 4, 5];

// function forEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i]);
//         callback(arr1[i]);
//     }
    
// }

// function pow(a) {
//     console.log(a ** 2);
// }

// function cube(a) {
//     console.log(a ** 3);
// }

// forEach(arr1, pow);

// forEach(arr1, cube);

//=======обработчики событий====================
// const prgph = document.querySelector("p");
// function clickHandler() {
//     console.log("Clicked");
// }
// prgph.addEventListener("click", clickHandler);

//=================================================
// const btn = document.querySelector("button");
// const prgph = document.querySelector("p");
// function clickHandler() {
//     prgph.innerText = +prgph.innerText + 1    
// }
// btn.addEventListener("click", clickHandler);

//==============================================
// const btn = document.querySelector("button");
// const prgph = document.querySelector("p");
// let counter = 0;
// function clickHandler() {
//     counter += 1
//     prgph.innerText = counter  
// }
// btn.addEventListener("click", clickHandler);

//=================================================
// const btn = document.querySelector("button.incr");
// const btn1 = document.querySelector("button.decr");
// const prgph = document.querySelector("p");
// let counter = 0;

// function clickHandlerIncr() {
//     counter += 1
//     prgph.innerText = counter  
// }

// function clickHandlerDecr() {
//     counter -= 1
//     prgph.innerText = counter  
// }
// btn.addEventListener("click", clickHandlerIncr);
// btn1.addEventListener("click", clickHandlerDecr);

//=====================================================
// const prgph = document.querySelector("p");
// function clickHandler(event) {
//     console.log(event);
//     // console.log("Clicked");
//     prgph.innerText += event.key;
// }

// prgph.addEventListener("click", clickHandler);

//====================================================
// document.addEventListener("keydown", clickHandler);

//====================================================
// const arr = ["Первый параграф", "Второй параграф", "Третий параграф",]
// document.body
// for (let index = 0; index < arr.length; index++) {
//     const newParagraph = document.createElement("p");
//     newParagraph.innerText = arr[index];
//     newParagraph.addEventListener("click", function() {
//         newParagraph.innerText = "************"
//     } )
//     div.append(newParagraph)         
// }

const images = ['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg', 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg', 'https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg'];

const thumbnailsDiv = document.querySelector("#thumbnails")

const previewDiv = document.querySelector("#preview")
const emptyImgElem = document.createElement("img")
previewDiv.append(emptyImgElem)
// previewDiv.style = "background-color: black"
previewDiv.setAttribute("style", "background-color: black; width: 50px")
for (let index = 0; index < images.length; index++) {
    const newImgElem = document.createElement("img")
    newImgElem.setAttribute("src", images[index])
    newImgElem.addEventListener("click", function () {
        // emptyImgElem.setAttribute("src", newImgElem.src)
        emptyImgElem.setAttribute("src", images[index])
    })
    thumbnailsDiv.append(newImgElem)
}
