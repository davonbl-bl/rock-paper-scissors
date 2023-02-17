// Xbox One X
//codeAcademy
//hogwarts legacy
function playingCPU() {
    let result = Math.floor(Math.random() * 99)

    if (result <= 33) {
        return 'rock'
    } else if (result <= 66) {
        return 'paper'
    } else if (result <= 99) {
        return 'scissors'
    }

}

let cpuPlayer = playingCPU

/*
Create 3 functions in reference to the 3 buttons you
created on the html document

you can reference the DOM in the global so that
buttons can have access to it

then do the if else statements 


*/

/*   
This gives the result of either the cpu or playOne
*/
let getResult = document.querySelector('#getResult')

/*
Here are the functions selecting the buttons from html file
*/
const pickRock = document.querySelector('#rock')
pickRock.addEventListener('click', rockBtn)

const pickPaper = document.querySelector('#paper')
pickPaper.addEventListener('click', paperBtn)

const pickScissors = document.querySelector('#scissors')
pickScissors.addEventListener('click', scissorsBtn)

/*
This keeps track of the scores between cpu and playerOne
*/
let cpuTotal = 0
let playerOneTotal = 0

document.querySelector('#sumbitBtn').addEventListener('click', howManyGames)
let getNumGames = document.querySelector('#number')

function howManyGames(){
    // e.preventDefault()
    console.log(getNumGames.value)
    // let convertStr = parseInt(getNumGames.value)
    // return convertStr
    return parseInt(getNumGames.value)
    
}

let countGames = howManyGames

let cpuTotalTrack = document.querySelector('#getCPUPoints')
let playerOneTotalTrack = document.querySelector('#getP1Points')

// const resetBtn = document.querySelector('#resetBtn')
resetBtn.addEventListener('click', () => {
    cpuTotalTrack.innerText = 0
    playerOneTotalTrack.innerText = 0
})

function getWin(e){
    // e.preventDefault()
    if(cpuTotal === countGames()){
        alert('CPU WINS THE GAME')
        cpuTotal = 0
        playerOneTotal = 0
        cpuTotalTrack.innerText = 0
        playerOneTotalTrack.innerText = 0
    } else if( playerOneTotal === countGames()){
        alert('PLAYER ONE WINS THE GAME')
        cpuTotal = 0
        playerOneTotal = 0
        cpuTotalTrack.innerText = 0
        playerOneTotalTrack.innerText = 0
    }
}

function rockBtn() {
    //    let rock = 'rock'
    if (cpuPlayer() === 'rock') {
        getResult.innerText = "It's a tie"
        console.log(getResult.innerText)
    } else if (cpuPlayer() === 'paper') {
        cpuTotal++
        getResult.innerText = "CPU wins"
        console.log(getResult.innerText)
        cpuTotalTrack.innerText = cpuTotal
    
   } else if (cpuPlayer() === 'scissors') {
        getResult.innerText = "Player One wins"
        console.log(getResult.innerText)
        playerOneTotal++
        playerOneTotalTrack.innerText = playerOneTotal
    } else {
        getResult.innerText = "It's a tie"
    }
    getWin()

}
function paperBtn() {

    if (cpuPlayer() === 'rock') {
        getResult.innerText = "Play One wins"
        console.log(getResult.innerText)
        playerOneTotal++
        playerOneTotalTrack.innerText = playerOneTotal

    } else if (cpuPlayer() === 'paper') {
        getResult.innerText = "It's a tie"
        console.log(getResult.innerText)
    } else if (cpuPlayer() === 'scissors') {
        getResult.innerText = "CPU wins"
        console.log(getResult.innerText)
        cpuTotal++
        cpuTotalTrack.innerText = cpuTotal
    } else {
        getResult.innerText = "It's a tie"
    }
    getWin()
}
function scissorsBtn() {


    if (cpuPlayer() === 'rock') {
        getResult.innerText = "CPU wins"
        console.log(getResult.innerText)
        cpuTotal++
        cpuTotalTrack.innerText = cpuTotal
    } else if (cpuPlayer() === 'scissors') {
        getResult.innerText = "It's a tie"
    } else if (cpuPlayer() === 'paper') {
        getResult.innerText = "Player One wins"
        console.log(getResult.innerText)
        playerOneTotal++
        playerOneTotalTrack.innerText = playerOneTotal

    } else {
        getResult.innerText = "It's a tie"
    }
    getWin()
}


/*

Template: basic functions work

- next function: keeping trail of wins and losses
- next function component: Creating a option where
you set who wins the game depending on the amount of 
wins they get from each win ( 
    You won!   ---> testing this particular 
)
- function --> the user to set the input of how manys
wins are need to win the game 

--> lastely work on the deisgn and look into examples



*/

