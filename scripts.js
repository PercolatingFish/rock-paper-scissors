let playerScore = 0;
let computerScore = 0;

// Randomly return rock paper or scissors
function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1)
}

// take number of choice, return name of choice
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

// take name of choice, return number of choice
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
        console.log("Tie!");
        winDiv.textContent = "Tie!";
    } else if ((playerSelection === 1 && computerSelection === 2) || (playerSelection === 2 && computerSelection === 3) || (playerSelection === 3 && computerSelection === 1)) {
        computerScore += 1
        console.log("You lose!");
        winDiv.textContent = `You lose! ${rockNamer(computerSelection)} beats ${rockNamer(playerSelection)}`;
    } else if (!(playerSelection === 1 && computerSelection === 2) || (playerSelection === 2 && computerSelection === 3) || (playerSelection === 3 && computerSelection === 1)) {
        playerScore += 1
        console.log("You win!");
        winDiv.textContent = `You win! ${rockNamer(playerSelection)} beats ${rockNamer(computerSelection)}`;
    }
    if (computerScore >= 5 || playerScore >= 5) {
        scoreDiv.textContent = `Game over!  \nPlayer: ${playerScore} Computer: ${computerScore}`
    } else {
        scoreDiv.textContent = `Player: ${playerScore} Computer: ${computerScore}`
    }    
}


// calls playRound function
// plays 5 round game
// keeps score and reports winner or loser at the end via console.log
// use for loop
function game() {

    let playerSelection = prompt("Rock, paper, or scissors?");
    playerSelection = rockParser(playerSelection.toLowerCase());
    // console.log("Player Selection" + playerSelection);
    console.log(playRound(playerSelection, getComputerChoice()));
    
    console.log(`Game over.  Your score: ${playerScore}.  Computer score: ${computerScore}.`)
}



// Add event listener to the buttons that calls playRound with the correct playerSelection on click
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

rockBtn.addEventListener('click', () => playRound(1, getComputerChoice()));
paperBtn.addEventListener('click', () => playRound(2, getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound(3, getComputerChoice()));

const winDiv = document.querySelector('#winDiv');
const scoreDiv = document.querySelector('#scoreDiv');





// Add a div for displaying results and change console.logs into DOM methods
// Display the running score
// Announce the winner once one player reaches 5 points





