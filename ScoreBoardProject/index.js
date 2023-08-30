let hscore = 0;
hscore = document.getElementById("home-score").textContent
console.log(hscore)
hscore = Number(hscore)
function addOne() {
    hscore += 1;
    document.getElementById("home-score").textContent = hscore
}

function addTwo() {
    hscore += 2;
    document.getElementById("home-score").textContent = hscore
}

function addThree() {
    hscore += 3;
    document.getElementById("home-score").textContent = hscore
}

function newGame() {
    hscore = 0;
    document.getElementById("home-score").textContent = hscore
    gscore = 0;
    document.getElementById("guest-score").textContent = hscore
}

let gscore = 0;
gscore = document.getElementById("guest-score").textContent
console.log(gscore)
gscore = Number(gscore)

function add1() {
    gscore += 1;
    document.getElementById("guest-score").textContent = gscore
}

function add2() {
    gscore += 2;
    document.getElementById("guest-score").textContent = gscore
}

function add3() {
    gscore += 3;
    document.getElementById("guest-score").textContent = gscore
} 
