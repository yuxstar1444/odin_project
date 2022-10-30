let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function computerAction(){
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random()* choices.length)]
}

function disableButton(){
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection){
    let computerSelection = computerPlay()
    let result = ""

    if((playerSelection == 'rock' && computerSelection == 'scissors') ||
      (playerSelection == 'paper' && computerSelection == 'rock') ||
      (playerSelection == 'scissors' && computerSelection == 'paper')){

      }

}