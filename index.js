window.onload = function(){
    displayBingoBoard()
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

for (let i = 0; i <= 75; i++){

    if(i === random){
        let numberSelected = numbers[i - 1]
        
        numberSelected.classList.add("chosen")

    }
}

}