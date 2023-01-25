// Variables //
const spaces = document.querySelectorAll('.space')

const gameboard = document.querySelector('#game-board')

const startSpace = document.getElementById('0')

const winSpace = document.getElementById('31')

const playerOne = document.createElement('div')

const playerTwo = document.createElement('div')

const drawCardButton = document.getElementById('draw-card')

let playerOneSpace = 0

let playerTwoSpace = 0

let playersTurn = 1

let cardDrawn

let element = ''

console.log(spaces)

let createPlayers = () => {
  playerOne.classList.add('playerOne')
  startSpace.appendChild(playerOne)
  playerTwo.classList.add('playerTwo')
  startSpace.appendChild(playerTwo)
}
createPlayers()

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
console.log(colorDeck.deck)

const boardSpaces = [
  'red 1',
  'purple 1',
  'yellow 1',
  'blue 1',
  'orange 1',
  'green 1',
  'red 2',
  'purple 2',
  'yellow 2',
  'blue 2',
  'orange 2',
  'green 2',
  'red 3',
  'purple 3',
  'yellow 3',
  'blue 3',
  'orange 3',
  'green 3',
  'red 4',
  'purple 4',
  'yellow 4',
  'blue 4',
  'orange 4',
  'green 4',
  'red 5',
  'purple 5',
  'yellow 5',
  'blue 5',
  'orange 5',
  'green 5',
  'red 6'
]

let drawCard = () => {
  let randomCard = Math.floor(Math.random() * colorDeck.deck.length)
  cardDrawn = colorDeck.deck[randomCard]
  console.log(cardDrawn)
  boardMovement(cardDrawn)
}

drawCardButton.addEventListener('click', drawCard)

const boardMovement = (color) => {
  let spaceArray = []
  const colorSpaces = document.querySelectorAll(`.${color}`)
  for (let i = 0; i < colorSpaces.length; i++) {
    spaceArray.push(parseInt(colorSpaces[i].id))
  }
  spaceArray.sort((a, b) => {
    return a - b
  })
  console.log(spaceArray)

  spaceArray.forEach((space) => {

  })
  // colorSpaces.forEach((space) => {
  //   const id = space.getAttribute('id')
  //   id.sort
  //   console.log(id)
  })
  return
}
