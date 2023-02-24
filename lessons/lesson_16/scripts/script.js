// const div = document.querySelector("div");
// console.log(div.classList);
// div.classList.add("root"); //добавляет новый класс
// div.classList.add("main"); //если есть то не добавляет
// console.log(div.classList);

// div.classList.add("box", "box-1", "box-2"); 

// div.classList.remove("root"); //удаляет класс

// div.classList.toggle("main"); //если нет класса с таким названием то добавляет а если есть то удаляет

// div.classList.contains("root"); // проверяет на наличие класса

// console.log(div.classList.contains("rtyr"));

// div.classList.replace("main", conteiner) 

// const div = document.querySelector("div");
// const addButton = document.querySelector("#addColor");
// const removeButton = document.querySelector("#removeColor");

// addButton.addEventListener("click", function() {
//     div.classList.add("green")
// })

// removeButton.addEventListener("click", function() {
//     div.classList.remove("green")
// })

// const div = document.querySelector("div");
// const button = document.querySelector("#toogleColor");

// button.addEventListener("click", function() {
//     div.classList.toggle("active");
// })

// toogleColor.addEventListener("click", function() {
//     div.classList.remove("active")
// })

// const div = document.querySelector("div");
// const cards = document.querySelectorAll(".card");

// for (let index = 0; index < cards.length; index++) {
//     const card = cards[index];

//     card.addEventListener("click", function() {
//         card.classList.toggle("active");
//     })
    
// }

//====================================================
// let words = [
//     {en: "cat", ru: "кошка"},
//     {en: "dog", ru: "кошка"},
//     {en: "bird", ru: "птица"},
//     {en: "tree", ru: "дерево"},
//     {en: "flower", ru: "цветок"},
// ]

// let cards = document.querySelector("#cards")

// for (let index = 0; index < words.length; index++) {
//     const {en, ru} = words[index];

//     const russian = document.createElement("p")
//     russian.innerText = ru

//     const english = document.createElement("p")
//     english.innerText = en
//     english.classList.add("hidden")

//     const card = document.createElement("div")
//     card.classList.add("card")
//     card.append(russian, english)
//     card.addEventListener("click", function() {
//         russian.classList.toggle("hidden")
//         english.classList.toggle("hidden")
//     })
//     cards.append(card)
    
// }

let words = [
    {en: "cat", ru: "кошка"},
    {en: "dog", ru: "кошка"},
    {en: "bird", ru: "птица"},
    {en: "tree", ru: "дерево"},
    {en: "flower", ru: "цветок"},
]

// let cards = document.querySelector("#cards")
// const ruBtn = document.querySelector("#btnRu")
// const enBtn = document.querySelector("#btnEn")

// for (let index = 0; index < words.length; index++) {
//     const {en, ru} = words[index];

//     const russian = document.createElement("p")
//     russian.innerText = ru

//     const english = document.createElement("p")
//     english.innerText = en
//     english.classList.add("hidden")

//     const card = document.createElement("div")
//     card.classList.add("card")
//     card.append(russian, english)
//     card.addEventListener("click", function() {
//         russian.classList.toggle("hidden")
//         english.classList.toggle("hidden")
//     })
//     cards.append(card)
    
// }
// Добавить внизу кнопки RU и EN при нажатии на которые все карточки переключаются на русский или английский соответственно.
const ruBtn = document.querySelector("#btnRu")
const enBtn = document.querySelector("#btnEn")
const ruParagraphs = []
const enParagraphs = []
for (let index = 0; index < words.length; index++) {
    const {en, ru} = words[index] // destructurization
    const russian = document.createElement("p")
    russian.innerText = ru
    ruParagraphs.push(russian)
    const english = document.createElement("p")
    english.innerText = en
    english.classList.add("hidden")
    enParagraphs.push(english)
    const card = document.createElement("div")
    card.classList.add("card")
    card.append(russian, english)
    cards.append(card)
}
ruBtn.addEventListener("click", function () {
    for (let index = 0; index < words.length; index++) {
        ruParagraphs[index].classList.remove("hidden")
        enParagraphs[index].classList.add("hidden")
    }
})
enBtn.addEventListener("click", function () {
    for (let index = 0; index < words.length; index++) {
        enParagraphs[index].classList.remove("hidden")
        ruParagraphs[index].classList.add("hidden")
    }
})