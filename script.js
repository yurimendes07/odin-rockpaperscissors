function getComputerChoice() {
  // Generate a random number between 0 and 2
  const choiceNumber = Math.floor(Math.random() * 3);
  
  switch (choiceNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}
