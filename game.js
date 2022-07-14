//With the javascript and html, I used sources ion youtube and google to help.  

var showUserChoice = document.getElementById("userchoice")
var showComputerChoice = document.getElementById("computerchoice")
var result_display = document.getElementById("result")
var options = document.querySelectorAll("button")

let userChoice
let computerChoice
let result
let userScore = 0
let computerScore = 0


options.forEach(possibleOption => possibleOption.addEventListener("click", (e) => {
  userChoice = e.target.id
  showUserChoice.innerHTML = userChoice
  genComputerChoice()
  getResult()
}))

// This function generates the computer's choice (the computer is choosing between)
function genComputerChoice() {
  var ranNum = Math.floor(Math.random() * options.length) + 1

  if (ranNum == 1) {
    computerChoice = "rock"
  }
  if (ranNum == 2) {
    computerChoice = "paper"
  }
  if (ranNum == 3) {
    computerChoice = "scissors"
  }
  showComputerChoice.innerHTML = computerChoice
}

// this function helps determine the end result of the users choice and computer's choice 
function getResult() {
  if (computerChoice == userChoice) {
    result = "It's a TIE!"
  }
  if (computerChoice == "rock" && userChoice == "paper") {
    userScore += 1
    result = "You Won!"
  }
  if (computerChoice == "rock" && userChoice == "scissors") {
    computerScore += 1
    result = "You Lost!"
  }
  if (computerChoice == "paper" && userChoice == "rock") {
    computerScore += 1
    result = "You Lost!"
  }
  if (computerChoice == "paper" && userChoice == "scissors") {
    userScore += 1
    result = "You Won!"
  }
  if (computerChoice == "scissors" && userChoice == "rock") {
    userScore += 1
    result = "You Won!"
  }
  if (computerChoice == "scissors" && userChoice == "paper") {
    computerScore += 1
    result = "You Lost!"
  }
  result_display.innerHTML = result
}
