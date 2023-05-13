// Rock paper scissors game played through the console
 
// Get user input
let choices = ["rock", "paper", "scissors"],
    playerChoice,
    computerChoice,
    randomNum
  
let playerScore = 0,
    computerScore = 0

// calculate computer's move
function getComputerChoice() {
  randomNum = Math.floor(Math.random() * 3)
  return choices[randomNum]
}

// play a round and display results
function playRound(playerChoice, computerChoice) {
  playerChoice = prompt("Choose rock, paper, or scissors.").toLowerCase()
  computerChoice = getComputerChoice().toLowerCase()

  console.log(`Player: ${playerChoice}`)
  console.log(`Computer: ${computerChoice}`)

  if (playerChoice == computerChoice) {
    console.log("It's a tie!")
  } else if ((playerChoice == "rock" && computerChoice == "scissors") || 
             (playerChoice == "paper" && computerChoice == "rock") ||
             (playerChoice == "scissors" && computerChoice == "paper")) {
    playerScore++
    console.log("You won the round!")
  } else {
    computerScore++
    console.log("You lost the round!")
  }
}

function playGame(playerChoice, computerChoice) {
  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round.toString()} - Scores:`)
    console.log(`Player: ${playerScore}, Computer: ${computerScore}`)

    playRound(playerChoice, computerChoice)
    console.log("\n")
  }

  console.log("Final scores:")
  console.log(`Player: ${playerScore}, Computer: ${computerScore}`)
  if (playerScore > computerScore) {
    console.log("Congratulations! You're the winner!!!")
  } else {
    console.log("Aw man, you lost... better luck next time!")
  }
}

playGame(playerChoice, computerChoice)