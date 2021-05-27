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
}