// rock paper scissors
// who goes first? player or computer
// computer goes first
// computer randomly selects from one of three strings named ["Rock", "Paper", "Scissors"] (probably a map)
// output is one of those three
// player then chooses rock paper or scissors by typing (make sure that they actually do)
// output the computer choice and then resolve the game by stating who won
// prompt player to play again (this involves a do-while loop)

let playerScore = 0, computerScore = 0;
let playerWins = false, computerWins = false;
const rockBtn = document.querySelector('#rock'), paperBtn = document.querySelector('#paper'), scissorsBtn = document.querySelector('#scissors');
const playerScoreDisplay = document.querySelector('#player-score'), computerScoreDisplay = document.querySelector('#computer-score');
const bottomTitleText = document.querySelector('#bottom-text');


rockBtn.addEventListener('click', () => {
        playRound("rock");
        checkScoreToWin(computerScore, playerScore);

});

paperBtn.addEventListener('click', () => {
    playRound("paper");
    checkScoreToWin(computerScore, playerScore);

}); 

scissorsBtn.addEventListener('click', () => {
    playRound("scissors");
    checkScoreToWin(computerScore, playerScore);
});


function playRound(choice) {
    let computerChoice = getComputerChoice();
    let playerChoice = choice;
    let outcome = checkWinner(computerChoice, playerChoice);
    if(outcome === "computer"){
        computerScore++;
        bottomTitleText.textContent = "Computer won this round with: " + computerChoice;
        computerScoreDisplay.textContent = computerScore;
    }else if(outcome === "player"){
        playerScore++;
        bottomTitleText.textContent = "Player won this round with: " + playerChoice;
        playerScoreDisplay.textContent = playerScore;
    }else{
        bottomTitleText.textContent = "Tie! Both players chose: " + computerChoice;
    }
    
}

function getComputerChoice() {
    let rps = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return rps[choice];
}

function checkWinner(computerChoice, playerChoice){
    if(computerChoice === playerChoice){
        return "tie";
    }else if(playerChoice === "rock"){
        if(computerChoice === "paper"){
            return "computer";
        }else{
            return "player";
        }
    }else if(playerChoice === "paper"){
        if(computerChoice === "rock"){
            return "player";
        }else{
            return "computer";
        }
    }else if(playerChoice === "scissors"){
        if(computerChoice === "rock"){
            return "computer";
        }else{
            return "player";
        }
    }else{
        return("You're an idiot!");
    }
}

function checkScoreToWin(computerScore, playerScore){
    if(computerScore === 5){
        bottomTitleText.textContent = "Computer has won!";
        reset();
    }
    if(playerScore === 5){
        bottomTitleText.textContent = "Player has won!";
        reset();
    }
}

function reset() {
    computerScore = 0;
    playerScore = 0;
    playerScoreDisplay.textContent = 0;
    computerScoreDisplay.textContent = 0;
}
