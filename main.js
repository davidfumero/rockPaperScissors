// Rock paper scissors game played through the console
let choices = ["rock", "paper", "scissors"],
    input,
    playerChoice,
    computerChoice,
    randomNum,
    tiebreaker,
    welcomeMsg;

welcomeMsg = `Welcome to Rock Paper Scissors!
The game will last 5 rounds, there will be extra 
rounds if the game were to end in a tie. Input your
choice when prompted and see if you beat the computer
Good luck!`;

console.log(welcomeMsg);
console.log("\n");

let playerScore = 0,
    computerScore = 0
    round = 0;

// Validate the user's input
function validateInput(input) {
  while (choices.indexOf(input) <= -1) 
  {
    console.log(`Sorry that's not a valid choice.
Please choose rock, paper, or scissors.`);

    input = prompt("Choose rock, paper, or scissors.").toLowerCase();
  };
  return input;
};

// Calculate computer's move
function getComputerChoice() {
  randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
};

// Play a round and display results
function playRound() {

  console.log(`Round ${round.toString()}`);

  console.log(`Score - Player: ${playerScore}, Computer: ${computerScore}`);
  console.log("\n");

  computerChoice = getComputerChoice().toLowerCase();

  console.log(`Player: ${playerChoice} | Computer: ${computerChoice}`);
  
  // Compare choices and adjust the score accordingly
  if (playerChoice == computerChoice) {
    console.log("It's a tie!");
  } else if ((playerChoice == "rock" && computerChoice == "scissors") || 
             (playerChoice == "paper" && computerChoice == "rock") ||
             (playerChoice == "scissors" && computerChoice == "paper")) {
    playerScore++;
    console.log("You won the round!");
  } else {
    computerScore++;
    console.log("You lost the round!");
  };
};

// Play a game of 5 rounds while keeping score
function playGame() {
  for (let round = 1; round <= 5; round++) {
    

    
    
  };

  
};

function declareWinner() {
  // Display final scores and declare a winner
  console.log("Final scores:");
  console.log(`Player: ${playerScore}, Computer: ${computerScore}`);

  // If there is a tie after the last round, enter tiebreaker state
  if (playerScore == computerScore) {
    tiebreaker = true;
      
    // Continue the tiebreaker until someone wins
    // while (tiebreaker) {
    //   console.log("Tiebreaker - Next score wins!");
    //   playRound(playerChoice);
        
    //   console.log(`Score - Player: ${playerScore}, Computer: ${computerScore}`);
    //   console.log("\n");
    //   if (playerScore == computerScore) {
    //     continue;
    //   };
    //   break;
  } else if (playerScore > computerScore) {
    console.log("Congratulations! You're the winner!!!");
  } else {
    console.log("Aw man, you lost... better luck next time.");
  };

  console.log("\n");
};

let buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerChoice = button.textContent.toLowerCase();
    playRound();
    round++;

    if (playerScore == 5 || computerScore == 5) {
      declareWinner();
    }
  });
});

// playGame()
console.log("Thanks for playing :)");