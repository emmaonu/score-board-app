

let homeEl = document.getElementById('home-score');
let guestEl = document.getElementById('guest-score');
let newGameEl = document.getElementById('new-game')


let homeScore = 0
let guestScore = 0

function homeOnePoint(){
    homeScore += 1
    homeEl.textContent = homeScore
}

function homeTwoPoint(){
    homeScore += 2
    homeEl.textContent =  homeScore
}

function homeThreePoint(){
    homeScore += 3
    homeEl.textContent =  homeScore
   
}

function guestOnePoint(){
    guestScore += 1
    guestEl.textContent =  guestScore
}

function guestTwoPoint(){
    guestScore +=2
    guestEl.textContent =  guestScore
}

function guestThreePoint(){
    guestScore += 3
    guestEl.textContent =  guestScore
}

function newGame(){
   homeScore = 0
   guestScore = 0
   homeEl.textContent = homeScore
   guestEl.textContent = guestScore


}


