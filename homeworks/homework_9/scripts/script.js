//Создать кнопку и красный квадрат с размерами 200х200px. При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать его до размеров 100х100px.
const square = document.createElement("div");
square.style.backgroundColor = "red";
square.style.width = "200px";
square.style.height = "200px";
document.body.append(square);

const butt = document.createElement("button");
butt.innerText = "Change square and color";
document.body.append(butt);

function changeSquare() {
    square.style.backgroundColor = square.style.backgroundColor === "green" ? "red" : "green";
    square.style.width = square.style.backgroundColor === "green" ? "100px" : "200px";
    square.style.height = square.style.backgroundColor === "green" ? "100px" : "200px";
}
butt.addEventListener("click", changeSquare);