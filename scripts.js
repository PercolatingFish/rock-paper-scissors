// Randomly return rock paper or scissors
function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1)
}

function rockNamer(choice) {
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else if (choice === 3) {
        return "Scissors";
    } else {
        return "Something has gone wrong";
    }
}

function rockParser(choice) {
    if (choice === "rock") {
        return 1;
    } else if (choice === "paper") {
        return 2;
    } else if (choice === "scissors") {
        return 3;
    } else {
        return "Something has gone wrong";
    }
}
// Plays a round of rock paper scissors
// Takes two parameters "playerSelection" and "computerSelection"
// Return a string that declares the winner "You lose! Paper beats Rock"
// Make playerSelection case-insensitive
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie!";
    } else if ((playerSelection === 1 && computerSelection === 2) || (playerSelection === 2 && computerSelection === 3) || (playerSelection === 3 && computerSelection === 1)) {
        computerScore++
        return `You lose! ${rockNamer(computerSelection)} beats ${rockNamer(playerSelection)}`;
    } else if (!(playerSelection === 1 && computerSelection === 2) || (playerSelection === 2 && computerSelection === 3) || (playerSelection === 3 && computerSelection === 1)) {
        playerScore++
        return `You win! ${rockNamer(playerSelection)} beats ${rockNamer(computerSelection)}`;
    } else {
        return "Please input either rock, paper, or scissors."
    }
}


// calls playRound function
// plays 5 round game
// keeps score and reports winner or loser at the end via console.log
// use for loop
function game() {

    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?");
        playerSelection = rockParser(playerSelection.toLowerCase());
        // console.log("Player Selection" + playerSelection);
        console.log(playRound(playerSelection, getComputerChoice()));
    }
    console.log(`Game over.  Your score: ${playerScore}.  Computer score: ${computerScore}.`)
}
let playerScore = 0;
let computerScore = 0;
game()

