let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  // Generate a random number between 0 and 2
  const choiceNumber = Math.floor(Math.random() * 3);
  
  switch (choiceNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("What will you choose? (Rock/Paper/Scissors) ");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log(`Tie. ${humanChoice} has the same power as ${computerChoice}`)
  } else if (humanChoice === "paper" && computerChoice === "rock"
          || humanChoice === "rock" && computerChoice === "scissors"
          || humanChoice === "scissors" && computerChoice === "paper") {
    console.log(`You won!!! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lost :( ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
