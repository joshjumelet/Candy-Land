// Variables //
const spaces = document.querySelectorAll('.space')

const gameboard = document.querySelector('#game-board')

const startSpace = document.getElementById('0')

const winSpace = 31

const playerOne = document.createElement('div')

const playerTwo = document.createElement('div')

const drawCardButton = document.getElementById('draw-card')

let cardDrawn

let turn = 1

gamePlayed = false

let boardColors = ['red', 'purple', 'yellow', 'blue', 'orange', 'green']

console.log(spaces)

class Deck {
  constructor() {
    this.deck = []
    const colors = ['red', 'purple', 'yellow', 'blue', 'orange', 'green']
    for (let color in colors) {
      this.deck.push(`${colors[color]}`)
    }
  }
}

let createPlayers = () => {
  playerOne.classList.add('playerOne')
  startSpace.appendChild(playerOne)
  playerTwo.classList.add('playerTwo')
  startSpace.appendChild(playerTwo)
}
createPlayers()
console.log(playerOne)

let playerOnePosition = playerOne.parentNode.id

console.log(playerOnePosition)

let playerTwoPosition = playerTwo.parentNode.id

console.log(playerTwoPosition)

const colorDeck = new Deck()
console.log(colorDeck.deck)

let drawCard = () => {
  let randomCard = Math.floor(Math.random() * colorDeck.deck.length)
  cardDrawn = colorDeck.deck[randomCard]
  console.log(cardDrawn)
  cardColor.innerText = `You have drawn a ${cardDrawn} card!`
  boardMovement(cardDrawn)
  turn *= -1
  playersTurn.innerText = `It's time for player ${
    turn === 1 ? 'One' : 'Two'
  } to choose a card!`
}

drawCardButton.addEventListener('click', drawCard)

const boardMovement = (color) => {
  let spaceArray = []
  const colorSpaces = document.querySelectorAll(`.${color}`)
  console.log(colorSpaces)
  playerOnePosition = playerOne.parentNode.id
  playerTwoPosition = playerTwo.parentNode.id

  for (let i = 0; i < colorSpaces.length; i++) {
    spaceArray.push(parseInt(colorSpaces[i].id))
  }
  spaceArray.sort((a, b) => {
    return a - b
  })
  console.log(spaceArray)
  if (turn === 1) {
    spaceArray.some((space) => {
      if (space > parseInt(playerOnePosition)) {
        console.log(`Player One nextSpace is ${space}`)
        let newSpace = space.toString()
        const newDiv = document.getElementById(newSpace)
        newDiv.appendChild(playerOne)
        gameWinner(newSpace)
        return true
      }
    })
  } else {
    spaceArray.some((space) => {
      if (space > parseInt(playerTwoPosition)) {
        console.log(`Player Two nextSpace is ${space}`)
        let newSpace = space.toString()
        const newDiv = document.getElementById(newSpace)
        newDiv.appendChild(playerTwo)
        gameWinner(newSpace)
        return true
      }
    })
  }
}

const gameWinner = () => {
  playerOnePosition = parseInt(playerOne.parentNode.id)
  console.log('This should be player one postion: ', playerOnePosition)
  console.log(winSpace)
  if (playerOnePosition === winSpace) {
    winner.innerText = `Player One has won the game!`
    gamePlayed = true
    endGame()
    return
  }
  playerTwoPosition = parseInt(playerTwo.parentNode.id)
  console.log(playerTwoPosition)
  if (playerTwoPosition === winSpace) {
    winner.innerText = `Player Two has won the game!`
    gamePlayed = true
    endGame()
    return
  }
}

const endGame = () => {
  if (gamePlayed === true) {
    drawCardButton.removeEventListener('click', drawCard)
    return
  }
}

const resetGame = () => {
  location.reload()
}

resetButton.addEventListener('click', () => resetGame())
