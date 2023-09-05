// Play a game of rock paper scissors vs the computer
const mainText = document.querySelector('h1');
const roundInfo = document.querySelector('.roundInfo');
const roundChoices = document.querySelector('#choices');
const displayScore = document.createElement('h3');
const results = document.createElement('h3');
let buttons = document.querySelectorAll('button');
let revealText = false;
let playerScore = 0;
let computerScore = 0;
let round = 1;
let choices = ["rock", "paper", "scissors"];
let playerChoice;
let computerChoice;
let randomNum;

// Calculate computer's choice
function getComputerChoice() {
  randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
};

// Play a round and display results
function playRound() {
  computerChoice = getComputerChoice().toLowerCase();

  // Compare choices and adjust the score accordingly
  if (playerChoice == computerChoice) {
    results.textContent = "It's a tie!";
  } else if ((playerChoice == "rock" && computerChoice == "scissors") || 
             (playerChoice == "paper" && computerChoice == "rock") ||
             (playerChoice == "scissors" && computerChoice == "paper")) {
    playerScore++;
    results.textContent = "You won the round!";
  } else {
    computerScore++;
    results.textContent = "You lost the round!";
  };

  if (revealText) {
    roundInfo.appendChild(displayScore);
    roundInfo.appendChild(results);
  };
  
  // Display game info
  mainText.textContent = `Round ${round.toString()}`;
  displayScore.textContent = `Scores - Player: ${playerScore}, Computer: ${computerScore}`;
  roundChoices.textContent = `Choices - Player: ${playerChoice} | Computer: ${computerChoice}`;
};

// Display final scores and declare a winner
function declareWinner() {
  displayScore.textContent = `Final scores: Player: ${playerScore}, Computer: ${computerScore}`;

  if (playerScore > computerScore) {
    results.textContent = "Congratulations! You're the winner!!!";
  } else {
    results.textContent = "Aw man, you lost... better luck next time.";
  };
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