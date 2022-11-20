
const buttons = document.querySelectorAll('.button');

const text = document.querySelector('.text')



const getComputerChoice = () => {

    var computerChoice = Math.random();

    if(computerChoice <= 0.34){
        
        return "Rock"
    }

    else if(computerChoice <= 0.68){
     console.log('paper')
     return "Paper"
    }

    else{
     console.log('scissors');
     return "Scissors";

    }
}


const getUserChoice = (e) => {


}






const playGame = (computerSelection, playerSelection) => {

      if (computerSelection === "Rock" && playerSelection === "Scissors") {
    return "Computer wins";
  } else if (computerSelection === "Paper" && playerSelection === "Rock") {
    return "Computer Wins";
  } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
    return "Computer wins";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "Computer wins";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "Player wins";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "Player wins";

  } else if(playerSelection === "Rock" && computerSelection === "Rock"){
    return "Tie"

  } else if(playerSelection === "Paper" && computerSelection === "Paper"){
    return "tie"
  }
}


const game = () => {
  for(let i = 0; i < 5; i++){
    pla
  }
}




playerSelection = prompt('please enter rock, paper, scissors');

const computerChoice = getComputerChoice();

console.log(playGame(playerSelection, computerChoice))

console.log(playerSelection);



buttons.forEach(item => {
 item.addEventListener('click', (e) => {
  let currentTarget = e.target;
  let CurrentValue = e.target.dataset.selection;
  
  if(CurrentValue === "rock"){
    console.log('rock');
  }
 })
})