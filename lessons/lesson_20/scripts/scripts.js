const form = document.querySelector("form")
const cardsSection = document.querySelector(".cards-section")
const addCardButton = document.querySelector("#add_card")
const removeCardsButton = document.querySelector("#remove_cards")

const questionInput = document.querySelector("#question")
const answerInput = document.querySelector("#answer")
// объявить переменную flashCards который пустой массив
// добавить обработчик события submit для form и предотвратить перезагрузку страницы
// <p>innerText</p>
// <input type="text"> // value
let flashCards = []
form.addEventListener("submit", function(event) {
    event.preventDefault()
})

// получить доступ к этим двум инпутам из javascript (questionInput, answerInput)
// добавить обработчик события click для addCardButton и сохранить значние из инпута вопроса в переменную questionText, значние из инпута ответа в переменную answerText

addCardButton.addEventListener("click", function () {
    const questionText = questionInput.value
    const answerText = answerInput.value

    // создать объект который называется fleshcard и у которого есть два свойства:
    // 1 - question = хранит в себе вопрос
    // 2 - answer = хранит в себе ответ
    // потом добавить этот объект в массив flashCards
    const fleshcard = {
        question: questionText,
        answer: answerText
    }

    flashCards.push(fleshcard)
    updateFleshCards()
    form.reset()
})

removeCardsButton.addEventListener("click", function() {
    flashCards = []
    updateFleshCards()
})

function updateFleshCards() {
    cardsSection.innerHTML = ""
    for (let index = 0; index < flashCards.length; index++) {
        const {question, answer} = flashCards[index]
        // <div class="card">
        //   <div class="card-front">
        //      <p>Question</p>
        //   </div>
        //   <div class="card-back">
        //      <p>Answer</p>
        //   </div>
        // </div>
        const cardDiv = document.createElement("div") // <div></div>
        cardDiv.classList.add("card") // <div class="card"></div>
        const cardFront = document.createElement("div") // <div></div>
        cardFront.classList.add("card-front") // <div class="card-front"></div>
        const cardFrontParagraph = document.createElement("p") // <p></p>
        cardFrontParagraph.innerText = question // <p>{question}</p>
        cardFront.append(cardFrontParagraph) // <div class="card-front"> <p>{question}</p> </div>
        const cardBack = document.createElement("div") // <div></div>
        cardBack.classList.add("card-back") // <div class="card-back"></div>
        const cardBackParagraph = document.createElement("p") // <p></p>
        cardBackParagraph.innerText = answer // <p>{answer}</p>
        cardBack.append(cardBackParagraph) // <div class="card-back"> <p>{answer}</p> </div>
        cardDiv.append(cardFront, cardBack) // <div class="card"> <div class="card-front"> <p>{question}</p> </div> <div class="card-back"> <p>{answer}</p> </div> </div>
        cardsSection.append(cardDiv)
    }
}