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

playerChoice = playerChoice.toLowerCase()
computerChoice = getComputerChoice().toLowerCase()

// play a round and display results
function playRound(playerChoice, computerChoice) {
  console.log(`Player: ${playerChoice}`)
  console.log(`Computer: ${computerChoice}`)

  if (playerChoice == computerChoice) {
    console.log("It's a tie!")
  } else if ((playerChoice == "rock" && computerChoice == "scissors") || 
             (playerChoice == "paper" && computerChoice == "rock") ||
             (playerChoice == "scissors" && computerChoice == "paper")) {
    console.log("You win!")
  } else {
    console.log("You lose!")
  }
}

playRound(playerChoice, computerChoice)