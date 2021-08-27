const one = document.querySelector(".one")
const two = document.querySelector(".two")
const three = document.querySelector(".three")
const point = document.querySelector(".point")
let counter = 0
//GAME START

// setTimeout(() => {
//     one.style.display = "block"
// }, 1000);

setTimeout(() => {
    two.style.display = "block"
}, 1000);

setTimeout(() => {
    three.style.display = "block"
}, 4000);

function pointOne() {
    counter++
    point.innerHTML = counter
    one.style.display = "none"
    setTimeout(() => {
        one.style.display = "block"
    }, 50);
}

one.addEventListener("click", pointOne)

function pointTwo() {
    counter++
    point.innerHTML = counter
    two.style.display = "none"
    setTimeout(() => {
        two.style.display = "block"
    }, 50);
}

two.addEventListener("click", pointTwo)

function pointThree() {
    counter++
    point.innerHTML = counter
    three.style.display = "none"
    setTimeout(() => {
        three.style.display = "block"
    }, 50);
}

// testing this file to vscode implementation

three.addEventListener("click", pointThree)

