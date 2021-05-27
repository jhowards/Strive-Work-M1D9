
window.onload = function(){
    displayBingoBoard()
    const randomButton = document.getElementById("randomButton");
    const array = createArray()
    const randomArray = shuffleArray(array)
    console.log("loaded")

    randomButton.addEventListener("click", function () {
        numberSelect(randomArray);
      });
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



//   const getRandomNum = function(range){
//       console.log(range)
//     const randIndex = Math.floor(Math.random() * 76) + 1
//     const random = range.splice(randIndex, 1)[0]
//     return random
//   }

const numberSelect = function(randomArray){
    
    // const random = Math.floor(Math.random() * 76) + 1
const numbers = document.querySelectorAll(".number")
let topNumber = document.getElementById("randomNumber")


 for (let i = 0; i <= 76; i++){
    
     if(i === randomArray[0]){
            topNumber.innerHTML = randomArray[0]
            numbers[i - 1].classList.add("chosen")
            console.log(randomArray[0])
            randomArray.shift()
            return
        }
 }
}

// let randoms = new Set();
// while(randoms.size<76){
//   randoms.add(1 + Math.floor(Math.random() * 76));
// }
// console.log([...randoms.values()]);

const createArray = function () {
    const arr = [];
    for (let i = 0; i < 76; i++) {
      arr.push(i + 1);
    }
    return arr;
  };

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}


