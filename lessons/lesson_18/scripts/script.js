const form = document.querySelector("form")
const input = document.querySelector("#new_item_input")
const list = document.querySelector("#todo_list")

const todoItems = [];

// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     const text = input.value;
//     form.reset();
//     console.log(text);
// })

function addItem(event) {
    event.preventDefault();
    let text = input.value;
    form.reset();
    text = text.trim() //trim удаляет пробелы в начале и конце строки

    if (text === "") {
        alert("Error")
        return //exit from function
    }

    const todoItem = {
        text: text,
        status: false
    }
    todoItems.push(todoItem)
    updateList()
}

function updateList() {

    list.innerHTML = ""

    for (let index = 0; index < todoItems.length; index++) {
       const {text, status} = todoItems[index] 
       const li = document.createElement("li")
       const input = document.createElement("input")
       const label = document.createElement("label")
       const button = document.createElement("button")
       button.innerText = "Remove"
       label.innerText = text
       input.setAttribute("type", "checkbox")
       button.setAttribute("data-index", index)
       button.classList.add("remove_item")
       button.addEventListener("click", function(even) {
        const index = even.target.dataset.index
        todoItems.splice(index, 1)

        updateList()
       }) 

       li.append(input, label, button) 

       list.append(li)        
    }
}

