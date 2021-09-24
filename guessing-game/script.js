// ============= variables ================== //

const randomNumber = Math.floor(Math.random()*100+1)
const chances = 5;
let isWin = false;

// ==================== variables ==================== //

// =============== imports ========================= //

const Userguess = document.querySelector("#number")
const resultDiv = document.querySelector(".result")
const historyDiv = document.querySelector(".history")
const submitButton = document.querySelector("#submit")



// =============== imports ========================= //

const GuessingGame = () => {
    const guess = Userguess.value;
    let result;
    console.log(guess)
    console.log(randomNumber)
    if (randomNumber === guess) {
        result = "You Won";
        isWin = true;
    } else if ( randomNumber < guess ) {
        result = "You too high! 😢";
        isWin = false
    }else if ( randomNumber > guess ) {
        result = "You too low! 😢";
        isWin = false
    }
    historyDiv.innerHTML += `<h4>You Guessed ${guess}</h4>`
    return resultDiv.innerHTML = `<h4>${result}</h4>`
}

submitButton.addEventListener('click', GuessingGame)

