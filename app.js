
const buttons = document.querySelector('.button');


const getComputerChoice = () => {

    var computerChoice = Math.random();

    if(computerChoice <= 0.34){
        console.log('rock');
        return "rock"
    }

    else if(computerChoice <= 0.68){
     console.log('paper')
     return "paper"
    }

    else{
     console.log('scissors');
     return "scissors";

    }
}






const playGame = (playerSelection, compuerSelection) => {

 if(playerSelection === "rock" && compuerSelection === "rock"){
  if(playerSelection === "paper" && compuerSelection === "paper"){
  if(playerSelection === "scissors" && compuerSelection === "scissors"){
    console.log('its a tie')
  }

  else if(playerSelection === "rock" && compuerSelection === "scissors" ||
       playerSelection === "paper" && compuerSelection === "rock" ||
       playerSelection === "scissors" && compuerSelection === "paper"){
       
        console.log('player won')
  }
  } 
  
  else {
   console.log('player lost')
  }
 }

}


playerSelection = 'rock';

const computerChoice = getComputerChoice();

console.log(playGame(playerSelection, computerChoice))