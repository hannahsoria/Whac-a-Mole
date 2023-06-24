const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const startDisplay = document.getElementById('start')
const possibleChoice = document.querySelectorAll('button')

let start
let result = 0
let currentTime = 15
let timerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random()* 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

function moveMole() {
    timerId = setInterval(randomSquare, 500)
}
moveMole()

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result ++
            score.textContent = result
            hitPostion = null
        }
    })
})

function countDown() {
    currentTime --
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countdownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! Final score: ' + result)
    }
}

let countdownTimerId = setInterval(countDown, 1000)






