
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






const playGame = (userInput, computerInput) => {

        if (userInput === 'rock' && computerInput === 'paper') {
          console.log('You lose! paper beats rock');
        } else if (userInput === 'rock' && computerInput === 'scissors') {
          console.log('You win! rock  beats scissors');

        } else if(userInput === 'paper' && computerInput === "rock") {
        } else {
          console.log('You tie!');
        }
      }


playerSelection = 'rock';

const computerChoice = getComputerChoice();

console.log(playGame(playerSelection, computerChoice))