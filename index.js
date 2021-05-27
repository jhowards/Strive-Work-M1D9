window.onload = function(){
    displayBingoBoard()
    const range = fillArray();
    generateRandNumber(range)
}



const displayBingoBoard = function(){

    let bingoBoard = document.getElementById("bingo-board")
    for (let i = 1; i <= 76; i++){
        let number = document.createElement("div")
        number.innerText = i
        number.classList.add("number")
        bingoBoard.appendChild(number)
    }
    let number = document.createElement("div")
    number.innerText = "BINGO!"
    number.classList.add("lastItem")
    bingoBoard.appendChild(number)
}

const numberSelect = function(){
random = Math.floor(Math.random() * 76) + 1
const numbers = document.querySelectorAll(".number")
let topNumber = document.getElementById("randomNumber")


for (let i = 0; i <= 75; i++){
    if(i === random){
            topNumber.innerHTML = random
            numbers[i - 1].classList.add("chosen")
            console.log(random)
        
    }
}
}

