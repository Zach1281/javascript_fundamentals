// rock paper scissors
// who goes first? player or computer
// computer goes first
// computer randomly selects from one of three strings named ["Rock", "Paper", "Scissors"] (probably a map)
// output is one of those three
// player then chooses rock paper or scissors by typing (make sure that they actually do)
// output the computer choice and then resolve the game by stating who won
// prompt player to play again (this involves a do-while loop)

console.log(rockPaperScissors());

function rockPaperScissors() {
    console.log("Welcome to Zach's Rock, Paper, Scissors Game!");
    console.log("The computer will go first because you are a measly human!");
    let playerScore = 0, computerScore = 0;
    let playerWins = false, computerWins = false;
    do{
        let computerChoice = getComputerChoice()
        let playerChoice = getPlayerChoice();
        computerChoice = computerChoice.toLowerCase();
        playerChoice = playerChoice.toLowerCase();
        let outcome = checkWinner(computerChoice, playerChoice);
        if(outcome === "computer"){
            computerScore++;
        }else if(outcome === "player"){
            playerScore++;
        }else{
            console.log(outcome);
        }
        if(playerScore === 5){
            return "Player Wins!"
        }else if(computerScore === 5){
            return "Computer Wins!"
        }
        console.log("computer: " + computerScore + " player: " + playerScore);
    }while(!playerWins || !computerWins);

    if(playerWins){
        console.log("Player has won!");
    }else if(computerWins){
        console.log("Computer has won!");
    }else{
        console.log("WTF how did we get here?");
    }
}

function getComputerChoice() {
    let rps = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);
    return rps[choice];
}

function getPlayerChoice() {
    return choice = prompt("Write rock, paper, or scissors");
}

// is there a more efficent algorithm for checking whos in rps?
// currently, id' have to write specific if statements for each scenario
// can you abstract the strings to a number and check if it's lower or higher?
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
