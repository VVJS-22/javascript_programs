// =========== Html tags declaration ================//

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const mainDiv = document.querySelector("main")
const Reset = document.querySelector("button")

// =========== Html tags declaration ================//


// =========== Database ================//

const choices = ["rock", "paper", "scissors"]

/*

choices[0] // rock
choices[1] // paper
choices[2] // scissors
choices[3] // undefined

*/



const scoreDatabase = {
    "rock" : {
        "rock": 0.5, "paper": 0, "scissors": 1 
    },
    "paper" : {
        "rock": 1, "paper": 0.5, "scissors": 0 
    },
    "scissors" : {
        "rock": 0, "paper": 1, "scissors": 0.5  
    },
}

const imageDatabase = {
    "rock": rock.src,
    "paper": paper.src,
    "scissors": scissors.src
}

// =========== Database ================//


// ============= Main game ============== //

const BotSelection = () => {

    const random = Math.floor(Math.random()*3) // returns 0 || 1 || 2

    return choices[random];

}

const Score = (yourChoice, botChoice) => {

    return scoreDatabase[yourChoice][botChoice];

}

const GameMessage = (gameScore) => {
    let result;
    switch(gameScore) {
        case 1:
            result = { message: "You Won!", color: "green" }
            break
        case 0.5:
            result = { message: "You Tied!", color: "yellow" }
            break
        case 0:
            result = { message: "You Lost!", color: "red" }
            break
        default:
            result = { message: "GameScore undefined", color: "grey"}
    }
    return result
}

const RemoveImages = () => {
    rock.remove()
    paper.remove()
    scissors.remove()
}

const FrontEnd  = (yourChoice, botChoice, finalMessage) => {
    mainDiv.innerHTML = `
        <img src="${imageDatabase[yourChoice]}" alt="${yourChoice}" />
        <h2 style="color:${finalMessage['color']}">${finalMessage['message']}</h2>
        <img src="${imageDatabase[botChoice]}" alt="${botChoice}" />
    `
}




const RpsGame = (choice) => {
    const yourChoice = choice.id;
    const botChoice = BotSelection();
    const gameScore = Score(yourChoice, botChoice);
    const finalMessage = GameMessage(gameScore);
    // console.log(yourChoice, botChoice, gameScore,finalMessage)
    RemoveImages() 
    FrontEnd(yourChoice, botChoice, finalMessage)
    Reset.style.display = "block"
}


// ============= Main game ============== //

