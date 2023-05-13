// Rock paper scissors game played through the console
 
// Get user input
let choices = ["rock", "paper", "scissors"],
    playerChoice = prompt("Choose rock, paper, or scissors."),
    computerChoice,
    randomNum

// calculate computer's move
function getComputerChoice() {
  randomNum = Math.floor(Math.random() * 3)
  return choices[randomNum]
}

