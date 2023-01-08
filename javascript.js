//create function to generate random computer selection.
function computerChoice() {
    let choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random()* 3)]
}

let gameWin = '';
//create playRound function
function playRound(userChoice, computerSelection) {

console.log(`Computer chose: ${computerSelection}`)
console.log(`You Chose: ${userChoice}`)


if (userChoice == 'rock' && computerSelection == 'rock' ||
    userChoice == 'paper' && computerSelection == 'paper' ||
    userChoice == 'scissors' && computerSelection == 'scissors') {
        console.log('Tie! Try again.')
    } else if (userChoice == 'rock' && computerSelection == 'scissors' ||
                userChoice == 'paper' && computerSelection == 'rock' ||
                userChoice == 'scissors' && computerSelection == 'paper') {
        console.log(`Congrats! You Win! ${userChoice} beats ${computerSelection}`)
        gameWin = 'Winner';
    } else {
        console.log(`Booo! You lose ${computerSelection} beats ${userChoice}`)
        gameWin = 'Loser';
    }
    return gameWin;
}

// `Booo! You lose ${computerSelection} beats ${userChoice}`
// `Congrats! You Win! ${userChoice} beats ${computerSelection}`

    

//make sure user entry is converted to lowercase
// userChoice = prompt("Enter: 'Rock, Paper, Scissors'").toLowerCase();
//computer selection set to computer choice function
// computerSelection = computerChoice()

// console.log(playRound(userChoice, computerSelection))


let userScore = 0;
let computerScore = 0;
let gameTies = 0;
function score() {
    if (gameWin === 'Winner') {
        userScore++;
    } else if (gameWin === 'Loser') {
        computerScore++;
    } else {
        gameTies++;
    }
    console.log(userScore + " " + computerScore + " " + gameTies)
}
function game() {
    let i = 0;
    for (;i < 5;) {
        userChoice = prompt("Enter: 'Rock, Paper, Scissors'").toLowerCase();
        computerSelection = computerChoice()
        playRound(userChoice, computerSelection)
        score()
        i++;
    }
    if (userScore > computerScore) {
        console.log(`You won the game by scoring ${userScore} to ${computerScore}!! Congratulations!`)
    } else {
        console.log(`Sorry you lose! The computer won scoring ${computerScore} to ${userScore}`)
    }
}

game()