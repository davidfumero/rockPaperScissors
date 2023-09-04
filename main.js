// Rock paper scissors game
const mainText = document.querySelector("h1");
const header = document.querySelector('.header');
const displayScore = document.createElement('h2');
let buttons = document.querySelectorAll('button');
let revealText = false;
let playerScore = 0;
let computerScore = 0;
let round = 1;
let choices = ["rock", "paper", "scissors"];
let input;
let playerChoice;
let computerChoice;
let randomNum;

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
  if (round == 2) {
    header.appendChild(displayScore);
  };
  
  mainText.textContent = `Round ${round.toString()}`;
  displayScore.textContent = `Score - Player: ${playerScore}, Computer: ${computerScore}`;


  // console.log(`Score - Player: ${playerScore}, Computer: ${computerScore}`);

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
  console.log("\n");
};

function declareWinner() {
  // Display final scores and declare a winner
  console.log("Final scores:");
  console.log(`Player: ${playerScore}, Computer: ${computerScore}`);

  if (playerScore > computerScore) {
    console.log("Congratulations! You're the winner!!!");
  } else {
    console.log("Aw man, you lost... better luck next time.");
  };

  console.log("\n");
  console.log("Thanks for playing :)");
};


buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerChoice = button.querySelector("img").alt.toLowerCase();
    playRound();
    round++;

    if (playerScore == 3 || computerScore == 3) {
      declareWinner();
    };
  });
});