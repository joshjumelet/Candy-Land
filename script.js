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

// Deck Object //

class Deck {
  constructor() {
    this.deck = []
    const colors = ['red', 'purple', 'yellow', 'blue', 'orange', 'green']
    for (let color in colors) {
      this.deck.push(`${colors[color]}`)
    }
  }
}

const colorDeck = new Deck()

// Create Player Funtion & Deploy Token to Starting Space //

let createPlayers = () => {
  playerOne.classList.add('playerOne')
  startSpace.appendChild(playerOne)
  playerTwo.classList.add('playerTwo')
  startSpace.appendChild(playerTwo)
}
createPlayers()

let playerOnePosition = playerOne.parentNode.id

let playerTwoPosition = playerTwo.parentNode.id

// Drawing Card Function //

let drawCard = () => {
  let randomCard = Math.floor(Math.random() * colorDeck.deck.length)
  cardDrawn = colorDeck.deck[randomCard]
  cardColor.innerText = `Player ${
    turn === 1 ? 'One' : 'Two'
  } has drawn a ${cardDrawn} card!`
  boardMovement(cardDrawn)
  turn *= -1
  playersTurn.innerText = `It is time for Player ${
    turn === 1 ? 'One' : 'Two'
  } to choose a card!`
}

drawCardButton.addEventListener('click', drawCard)

// Player Token Movement Across the Board //

const boardMovement = (color) => {
  let spaceArray = []
  const colorSpaces = document.querySelectorAll(`.${color}`)
  playerOnePosition = playerOne.parentNode.id
  playerTwoPosition = playerTwo.parentNode.id

  for (let i = 0; i < colorSpaces.length; i++) {
    spaceArray.push(parseInt(colorSpaces[i].id))
  }
  spaceArray.sort((a, b) => {
    return a - b
  })
  if (turn === 1) {
    spaceArray.some((space) => {
      if (space > parseInt(playerOnePosition)) {
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
        let newSpace = space.toString()
        const newDiv = document.getElementById(newSpace)
        newDiv.appendChild(playerTwo)
        gameWinner(newSpace)
        return true
      }
    })
  }
}

// Declare Winner Function //

const gameWinner = () => {
  playerOnePosition = parseInt(playerOne.parentNode.id)
  if (playerOnePosition === winSpace) {
    winner.innerText = `Player One has won the game!`
    gamePlayed = true
    endGame()
    return
  }
  playerTwoPosition = parseInt(playerTwo.parentNode.id)
  if (playerTwoPosition === winSpace) {
    winner.innerText = `Player Two has won the game!`
    gamePlayed = true
    endGame()
    return
  }
}

// End of Game and Reset Function //

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
