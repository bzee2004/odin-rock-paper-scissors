

var humanScore = 0, computerScore = 0;

function getComputerChoice() {
    const choice = Math.floor(Math.random()*3);
    if (choice == 0) { return 'Rock'; }
    else if (choice == 1) { return 'Paper'; }
    else { return 'Scissors'; }
}

function getHumanChoice() {
    return prompt("Rock, Paper, or Scissors?");
}

function playRound() {
    const computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();
    humanChoice = humanChoice[0].toUpperCase() + humanChoice.substring(1).toLowerCase();

    if (
        humanChoice == 'Rock' && computerChoice == 'Paper' ||
        humanChoice == 'Paper' && computerChoice == 'Scissors' || 
        humanChoice == 'Scissors' && computerChoice == 'Rock'
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        ++computerScore;
    }
    else if (
        humanChoice == 'Rock' && computerChoice == 'Scissors' ||
        humanChoice == 'Paper' && computerChoice == 'Rock' ||
        humanChoice == 'Scissors' && computerChoice == 'Paper'
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
        ++humanScore;
    }
    else {
        console.log('Tie!')
    }
}


for (let i = 0; i < 5; i++) {
    playRound();
    console.log(`
        You: ${humanScore}
        Computer: ${computerScore}
    `)
}

