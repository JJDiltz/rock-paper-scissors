//function to generate random choice of rock paper scissors
function getComputerChoice(){
    //initialize array of choices to choose from 
let compChoices = ["Rock", "Paper", "Scissors"];
    //generate random choice between 1, 2, or 3
let randomChoice = Math.floor((3 * Math.random())) + 1;
    //variable to assign the number generated to an actual choice
let chosenChoice;
    //simple if statement to assign choice to an option in the array
if (randomChoice === 1) {
    chosenChoice = compChoices[0]
} else if (randomChoice === 2) {
    chosenChoice = compChoices[1]
} else {
    chosenChoice = compChoices[2]
}
    //return computer generated choice as a string;
    return chosenChoice;
}
// console.log(getComputerChoice())
// ------------------------------------
const computerSelection = getComputerChoice();
const playerChoice = window.prompt("Enter your choice of Rock, Paper, or Scissors");
console.log("They Chose")
console.log(computerSelection)
console.log("You Chose")
console.log(playerChoice)

let gameWin;

function playRound(playerChoice, computerSelection) {

if (playerChoice === "Rock" && computerSelection === "Paper") {
    gameWin = false;
} else if (playerChoice === "Paper" && computerSelection === "Scissors") {
    gameWin = false;
} else if (playerChoice === "Scissors" && computerSelection === "Rock") {
    gameWin = false;
} else if (playerChoice === "Scissors" && computerSelection === "Paper"){
    gameWin = true;
} else if (playerChoice === "Rock" && computerSelection === "Scissors") {
    gameWin = true;
} else  if (playerChoice === "Paper" && computerSelection === "Rock"){
    gameWin = true;
} else {
    game = false;
}
return gameWin;
}
console.log(playRound(playerChoice, computerSelection))
