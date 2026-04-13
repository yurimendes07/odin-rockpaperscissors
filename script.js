const narrator = document.getElementById("narrator");
const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const humanHand = document.getElementById("player");
const computerHand = document.getElementById("computer");

function narratorSpeak(text) {
  narrator.textContent = text;
}

function changeHands(humanChoice, computerChoice) {
  console.log(humanChoice, computerChoice);
  switch (humanChoice) {
    case "rock":
      humanHand.setAttribute("src", "./src/images/Rock.png");
      break;
    case "paper":
      humanHand.setAttribute("src", "./src/images/Paper.png");
      break;
    case "scissors":
      humanHand.setAttribute("src", "./src/images/Scissors.png");
  }

  switch (computerChoice) {
    case "rock":
      computerHand.setAttribute("src", "./src/images/Rock.png");
      break;
    case "paper":
      computerHand.setAttribute("src", "./src/images/Paper.png");
      break;
    case "scissors":
      computerHand.setAttribute("src", "./src/images/Scissors.png");
  }
}

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

function verifyWinner() {
  if (humanScore !== 5 && computerScore !== 5) return;
  if (humanScore === computerScore) {
    narratorSpeak(`${humanScore}/${computerScore}, hard battle, you both were good. Tie!`);
  } else if (humanScore < computerScore) {
    narratorSpeak(`${humanScore}/${computerScore}, you tried, but the computer was better. Better luck next time!`);
  } else {
    narratorSpeak(`${humanScore}/${computerScore}, nice!!! You did it, you beat the computer.`);
  }
  humanScore = 0;
  computerScore = 0;
}

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  changeHands(humanChoice, computerChoice);

  if (humanChoice === computerChoice) {
    narratorSpeak(`Tie. ${humanScore}/${computerScore}`);
  } else if (humanChoice === "paper" && computerChoice === "rock"
    || humanChoice === "rock" && computerChoice === "scissors"
    || humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    narratorSpeak(`You won!!! ${humanScore}/${computerScore}`);
  } else {
    computerScore++;
    narratorSpeak(`You lost :( ${humanScore}/${computerScore}`);
  }

  verifyWinner();
}

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()))
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()))
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()))
