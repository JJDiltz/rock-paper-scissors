//create function to generate random computer selection.
function computerChoice() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()* 3)]
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const results = document.getElementById('results');
const compScore = document.querySelector('computerscore');
const reset = document.querySelector('results');  
let playerScoreText = document.getElementById('playerscore').innerHTML;
let computerScoreText = document.getElementById('computerscore').innerHTML;
let gameTieText = document.getElementById("game-ties").innerHTML;
let resultsText = document.getElementById('gameMessage').innerHTML;
let gameWin = "";
let userScore = 0;
let computerScore = 0;
let gameTies = 0;


function playRound(userChoice, computerSelection) {
    if (userChoice === 'rock' && computerSelection === 'scissors') {
        gameWin = "Winner"
    } else if (userChoice === 'scissors' && computerSelection === 'paper') {
        gameWin = "Winner"
    } else if (userChoice === 'paper' && computerSelection === 'rock') {
        gameWin = "Winner"
    } else if (userChoice === 'rock' && computerSelection === 'paper') {
        gameWin = "Loser"
    } else if (userChoice === 'paper' && computerSelection === 'scissors') {
        gameWin = "Loser"
    } else if (userChoice === 'scissors' && computerSelection === 'rock') {
        gameWin = "Loser"
    } else if (userChoice === 'rock' && computerSelection === 'rock') {
        gameWin = "Tie"
    } else if (userChoice ==='paper' && computerSelection === 'paper') {
        gameWin = 'Tie' 
    } else if (userChoice ==='scissors' && computerSelection === 'scissors') {
        gameWin = 'Tie'
    }
    console.log(gameWin)
    return gameWin;
}



function score() {
    if (gameWin === "Tie") {
            gameTies++;
    } 
    if (gameWin === 'Winner') {
            userScore++;
    }
    if (gameWin === 'Loser') {
            computerScore++;
    }
    console.log(userScore + " " + computerScore + " " + gameTies)
    return userScore + computerScore + gameTies
    }

function gWin() {
    let playerScoreText = document.getElementById('playerscore').innerHTML = "You " + userScore;
}
function gLose() {
    let computerScoreText = document.getElementById('computerscore').innerHTML = "Computer " + computerScore
}
function gTie() {
    let gameTieText = document.getElementById("game-ties").innerHTML = "Tie " + gameTies
}



rockBtn.addEventListener("click", () => {
    userChoice = 'rock'
    computerSelection = computerChoice()
    console.log(userChoice)
    console.log(computerSelection)
    playRound(userChoice, computerSelection)
    score()
    gameEnd()
    gWin()
    gLose()
    gTie()
})
paperBtn.addEventListener("click", () => {
    userChoice = 'paper'
    computerSelection = computerChoice()
    console.log(userChoice)
    console.log(computerSelection)
    playRound(userChoice, computerSelection)
    score()
    gameEnd()
    gWin()
    gLose()
    gTie()
})

scissorsBtn.addEventListener("click", () => {
    userChoice = 'scissors'
    computerSelection = computerChoice()
    console.log(userChoice)
    console.log(computerSelection)
    playRound(userChoice, computerSelection)
    score()
    gameEnd()
    gWin()
    gLose()
    gTie()
})

function startOver() {
    rockBtn.removeAttribute('disabled');
    paperBtn.removeAttribute('disabled');
    scissorsBtn.removeAttribute('disabled');
    let resultsText = document.getElementById('gameMessage').innerHTML = ""
    let playerScoreText = document.getElementById('playerscore').innerHTML = "You " + (userScore = 0);
    let computerScoreText = document.getElementById('computerscore').innerHTML = "Computer " + (computerScore = 0);
    let gameTieText = document.getElementById("game-ties").innerHTML = "Tie " + (gameTies = 0)
    
}

function gameEnd() {
    if (userScore === 5 || computerScore === 5 || gameTies === 5) {
        rockBtn.setAttribute('disabled', 1);
        paperBtn.setAttribute('disabled', 1);
        scissorsBtn.setAttribute('disabled', 1);
        const endButton = document.createElement('button')
        endButton.innerText = 'New Game'
        document.body.appendChild(endButton)
        const finalResult = document.createElement('h3')
        finalResult.innerText = `Game Over! You Won ${userScore} rounds and the Computer won ${computerScore} rounds. There were ${gameTies} tie rounds`
        document.body.appendChild(finalResult)
        endButton.addEventListener('click', () => {
            startOver()
            document.body.removeChild(endButton)
            document.body.removeChild(finalResult)
        })

    }
}
