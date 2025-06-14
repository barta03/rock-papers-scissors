console.log("Please write \"start()\" and press Enter to start the rock-paper-scissors game in this browser console.");

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0) return "rock";
  if (randomNum == 1) return "paper";
  if (randomNum == 2) return "scissors";
}

function getHumanChoice() {
  const HumanChoice = prompt(
    'Enter your choice ("rock", "paper" or "scissors": )'
  );
  return HumanChoice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      humanScore++;
      computerScore++;
      console.log("It's a Draw");
    } else {
      if (humanChoice === "rock") {
        if (computerChoice === "paper") {
          computerScore++;
          console.log("You lose! Paper beats Rock");
        } else {
          humanScore++;
          console.log("You win! Rock beats Scissors");
        }
      }
      else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
          humanScore++;
          console.log("You win! Paper beats Rock");
        } else {
          computerScore++;
          console.log("You lose! Scissors beats Paper");
        }
      } else {
        if (computerChoice === "paper") {
          humanScore++;
          console.log("You win! Scissors beats Paper");
        } else {
          computerScore++;
          console.log("You lose! Rock beats Scissors");
        }
      }
    }
  }
  
  for (let i=0; i<5; i++){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    
    playRound(humanSelection,computerSelection);
  }

  if(humanScore>computerScore){
    console.log("You Win!🥇")
  }
  else if(humanScore<computerScore){
    console.log("You Lost!😞")
  }
  else {
    console.log("Draw!")
  }
}

alert("To begin the game please open your browser console.");
window.start = playGame;