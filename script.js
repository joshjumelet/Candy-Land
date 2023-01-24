// Variables //
const spaces = document.querySelectorAll('.space')

const gameboard = document.querySelector('#game-board')

const startSpace = document.getElementById('sp0')

const winSpace = document.getElementById('sp31')

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
    const values = ['1', '2', '3', '4', '5', '6', '7']

    for (let color in colors) {
      for (let value in values) {
        this.deck.push(`${colors[color]} ${values[value]}`)
      }
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
}
// drawCard()

drawCardButton.addEventListener('click', drawCard)
