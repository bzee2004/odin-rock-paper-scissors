

var humanScore = 0, computerScore = 0;
const resultsDisplay = document.querySelector('#results');
const scoreDisplay = document.querySelector('#score');

function getComputerChoice() {
    const choice = Math.floor(Math.random()*3);
    if (choice == 0) { return 'Rock'; }
    else if (choice == 1) { return 'Paper'; }
    else { return 'Scissors'; }
}

// function getHumanChoice() {
//     return prompt("Rock, Paper, or Scissors?");
// }

function playRound(humanChoice) {

    const computerChoice = getComputerChoice();
    // let humanChoice = getHumanChoice();
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.substring(1).toLowerCase();

    if (
        humanChoice == 'Rock' && computerChoice == 'Paper' ||
        humanChoice == 'Paper' && computerChoice == 'Scissors' || 
        humanChoice == 'Scissors' && computerChoice == 'Rock'
    ) {
        resultsDisplay.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
        ++computerScore;
    }
    else if (
        humanChoice == 'Rock' && computerChoice == 'Scissors' ||
        humanChoice == 'Paper' && computerChoice == 'Rock' ||
        humanChoice == 'Scissors' && computerChoice == 'Paper'
    ) {
        resultsDisplay.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
        ++humanScore;
    }
    else {
        resultsDisplay.textContent = 'Tie!';
    }

    if (humanScore >= 5) {
        scoreDisplay.textContent = 'You have won the game!';
        humanScore = 0, computerScore = 0;
    }
    else if (computerScore >= 5) {
        scoreDisplay.textContent = 'Computer wins... dang you stink';
        humanScore = 0, computerScore = 0;
    }
    else {
        scoreDisplay.textContent = 
        `
        You: ${humanScore} 
        Robot:${computerScore}
        `;
    }
}

const ui = document.querySelector('#play-ui');
const rock = document.createElement('button');
const paper = document.createElement('button');
const scissors = document.createElement('button');

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

rock.onclick = () => { playRound('Rock'); }
paper.onclick = () => { playRound('Paper'); }
scissors.onclick = () => { playRound('Scissors'); }

ui.appendChild(rock);
ui.appendChild(paper);
ui.appendChild(scissors);



