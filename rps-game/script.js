// =========== Html tags declaration ================//

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

// =========== Html tags declaration ================//


// =========== Database ================//

const choices = ["rock", "paper", "scissors"]

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

// =========== Database ================//
