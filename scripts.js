// Randomly return rock paper or scissors
function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1)
}

// Plays a round of rock paper scissors
// Takes two parameters "playerSelection" and "computerSelection"
// Return a string that declares the winner "You lose! Paper beats Rock"
// Make playerSelection case-insensitive
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie!"
    } else if ((playerSelection === 1 && computerSelection === 2) || (playerSelection === 2 && computerSelection === 3) || (playerSelection === 3 && computerSelection === 1)) {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    } else {
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
}


// calls playRound function
// plays 5 round game
// keeps score and reports winner or loser at the end via console.log
// use for loop
function game() {

}


