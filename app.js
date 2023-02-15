
function playingCPU() {
    let result = Math.floor(Math.random() * 99)

    if(result <= 33){
        return 'rock'
    } else if (result <= 66){
        return 'paper'
    } else if (result <= 99){
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

let getResult = document.querySelector('#getResult')


const pickRock = document.querySelector('#rock')
pickRock.addEventListener('click', rockBtn)

const pickPaper = document.querySelector('#paper')
pickPaper.addEventListener('click', paperBtn)

const pickScissors = document.querySelector('#scissors')
pickScissors.addEventListener('click', scissorsBtn )

function rockBtn(){
//    let rock = 'rock'
   if(cpuPlayer() === 'rock'){
    getResult.innerText = "It's a tie"
    console.log(getResult.innerText)
   }else if(cpuPlayer() === 'paper'){
    getResult.innerText = "CPU wins"
    console.log(getResult.innerText)
   }else if(cpuPlayer() === 'scissors'){
    getResult.innerText = "Player One wins"
    console.log(getResult.innerText)
   }

}
function paperBtn(){
    if(cpuPlayer() === 'rock'){
        getResult.innerText = "Play One wins"
        console.log(getResult.innerText)
    } else if (cpuPlayer() === 'paper'){
        getResult.innerText = "It's a tie"
        console.log(getResult.innerText)
    } else if(cpuPlayer() === 'scissors'){
        getResult.innerText = "CPU wins"
        console.log(getResult.innerText)
    }
}
function scissorsBtn(){
    console.log(playingCPU() === 'rock')
    if(cpuPlayer() === 'rock'){
        getResult.innerText = "CPU wins"
        console.log(getResult.innerText)
    } else if (cpuPlayer() === 'scissors'){
        getResult.innerText = "It's a tie"
    } else if (cpuPlayer() === 'paper'){
        getResult.innerText = "Player One wins"
        console.log(getResult.innerText)

    }
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

