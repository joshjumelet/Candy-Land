// Variables //
const spaces = document.querySelectorAll('.space')

const gameboard = document.querySelector('#game-board')

const startSpace = document.getElementById('sp0')

const winSpace = document.getElementById('sp31')

const playerOne = document.createElement('div')

const playerTwo = document.createElement('div')

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

const deck1 = new Deck()
console.log(deck1.deck)

// let drawCard = () => {}
