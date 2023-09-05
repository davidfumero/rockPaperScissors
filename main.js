// Rock paper scissors game
const mainText = document.querySelector('h1');
const header = document.querySelector('.header');
const roundInfo = document.querySelector('.roundInfo');
const roundChoices = document.querySelector('#choices');
const displayScore = document.createElement('h3');
const displayChoices = document.createElement('h3');
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
  computerChoice = getComputerChoice().toLowerCase();
  
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

  if (revealText) {
    roundInfo.appendChild(displayScore);
    // roundInfo.appendChild(displayChoices);
  };
  

  mainText.textContent = `Round ${round.toString()}`;
  displayScore.textContent = `Score - Player: ${playerScore}, Computer: ${computerScore}`;
  roundChoices.textContent = `Player: ${playerChoice} | Computer: ${computerChoice}`;
  
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
    revealText = true;
    playerChoice = button.querySelector("img").alt.toLowerCase();
    playRound();
    round++;

    if (playerScore == 3 || computerScore == 3) {
      declareWinner();
    };
  });
});