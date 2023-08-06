/*const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('User-choice') // corrected the variable name
const resultDisplay = document.getElementById('result')

//get the  the all button element 

const possibleChoices = document.querySelectorAll('button')

let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice =>  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerText = userChoice // corrected the variable name
    generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length); // or put 3 which is lenght of the button element;

    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if( randomNumber === 1) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 2) {
        computerChoice = 'papper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}*/


const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('User-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
let result;

if(computerChoiceDisplay && userChoiceDisplay && resultDisplay && possibleChoices.length){ // check if all elements exist
  possibleChoices.forEach(possibleChoice =>  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult()
  }));

  function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);

    if (randomNumber === 0) {
        computerChoice = 'rock'
    }
    if( randomNumber === 1) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 2) {
        computerChoice = 'papper'
    }
    computerChoiceDisplay.innerHTML = computerChoice;
  }
}

function getResult(){
    if(computerChoice === userChoice){
        result = ' its a draw'
    }
    if(computerChoice === 'rock' && userChoice === "papper"){
        result = 'you win'
    } 
    if(computerChoice === 'rock' && userChoice === "scissors"){
        result = 'you lost'
    } 
    if(computerChoice === 'papper' && userChoice === "scissors"){
        result = 'you win'
    } 
    if(computerChoice === 'papper' && userChoice === "rock"){
        result = 'you lose'
    } 
    if(computerChoice === 'scissor' && userChoice === "rock"){
        result = 'you win'
    } 
    if(computerChoice === 'scissor' && userChoice === "paper"){
        result = 'you lose'
    } 
    resultDisplay.innerHTML = result
}






