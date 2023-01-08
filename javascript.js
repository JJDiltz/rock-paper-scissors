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
    console.log(gameWin)
    return gameWin;
}
console.log(gameWin)

// `Booo! You lose ${computerSelection} beats ${userChoice}`
// `Congrats! You Win! ${userChoice} beats ${computerSelection}`

    

//make sure user entry is converted to lowercase
// userChoice = prompt("Enter: 'Rock, Paper, Scissors'").toLowerCase();
//computer selection set to computer choice function
// computerSelection = computerChoice()

// console.log(playRound(userChoice, computerSelection))

// let userScore = 0;
// let computerScore = 0;
// if (gameWin === 'Winner') {
//     userScore++;
// } else {
//     computerScore++;
// }

let userScore = 0;
let computerScore = 0;
function game() {
    let i = 0;
    for (;i < 5;) {
        userChoice = prompt("Enter: 'Rock, Paper, Scissors'").toLowerCase();
        computerSelection = computerChoice()
        playRound(userChoice, computerSelection)
        i++;
    }
}
if (gameWin === 'Winner') {
    userScore++;
} else {
    computerScore++;
}

console.log(game())






// //function to generate random choice of rock paper scissors
// function getComputerChoice(){
//     //initialize array of choices to choose from 
// let compChoices = ["Rock", "Paper", "Scissors"];
//     //generate random choice between 1, 2, or 3
// let randomChoice = Math.floor((3 * Math.random())) + 1;
//     //variable to assign the number generated to an actual choice
// let chosenChoice;
//     //simple if statement to assign choice to an option in the array
// if (randomChoice === 1) {
//     chosenChoice = compChoices[0]
// } else if (randomChoice === 2) {
//     chosenChoice = compChoices[1]
// } else {
//     chosenChoice = compChoices[2]
// }
//     //return computer generated choice as a string;
//     return chosenChoice;
// }
// // console.log(getComputerChoice())
// // ------------------------------------

// let computerSelection = getComputerChoice();
// let playerChoice = prompt("Enter your choice of Rock, Paper, or Scissors");
// console.log("They Chose")
// console.log(computerSelection)
// console.log("You Chose")
// console.log(playerChoice)

// let gameWin;

// function playRound(playerChoice, computerSelection) {

// //!!!!ensure player entry can be case-insensitive. --- TO DO!!!

// //if statement requires refactoring, needed to reach end result first. 


// if (playerChoice === "Rock" && computerSelection === "Paper") {
//     gameWin = false;
// } else if (playerChoice === "Paper" && computerSelection === "Scissors") {
//     gameWin = false;
// } else if (playerChoice === "Scissors" && computerSelection === "Rock") {
//     gameWin = false;
// } else if (playerChoice === "Scissors" && computerSelection === "Paper"){
//     gameWin = true;
// } else if (playerChoice === "Rock" && computerSelection === "Scissors") {
//     gameWin = true;
// } else  if (playerChoice === "Paper" && computerSelection === "Rock"){
//     gameWin = true;
// } else {
//     gameWin = false;
// }
// return gameWin;
// // console.log(playRound(playerChoice, computerSelection)
// function game() {
//     let userScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         playRound(playerChoice, computerSelection)
//     }
// }
// }