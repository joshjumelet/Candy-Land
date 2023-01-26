// Variables //
const spaces = document.querySelectorAll('.space')

const gameboard = document.querySelector('#game-board')

const startSpace = document.getElementById('0')

const winSpace = document.getElementById('31')

const playerOne = document.createElement('div')

const playerTwo = document.createElement('div')

const drawCardButton = document.getElementById('draw-card')

// let color

let cardDrawn

let turn = 1

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
  boardMovement(cardDrawn)
  turn *= -1
  playersTurn.innerText = `It is the next Players turn`
}

drawCardButton.addEventListener('click', drawCard)

const boardMovement = (color) => {
  let spaceArray = []
  const colorSpaces = document.querySelectorAll(`.${color}`)
  console.log(colorSpaces)

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
        return true
      }
    })
  } else {
    spaceArray.some((space) => {
      if (space > parseInt(playerTwoPosition)) {
        console.log(`Player Two nextSpace is ${space}`)
        return turn
      }
    })
  }
}

// const nextSpace = document.querySelector(`#${}`)

// let playerPosition = document.querySelector(`.${color}`)
// console.log(playerPosition)

// spaceArray.forEach((space) => {
//   const id = space.getAttribute('id')
// const playerMove = space.getAttribute('id')
// console.log(playerMove)

//   if (playersTurn === 1) {
//     spaceArray.forEach((space) => {
//       let playerMove = space.getAttribute('id')
//       console.log(playerMove)
//       // playerMove.forEach((a) => {
//       //   if (playerOneSpace === spaceArray[i]) playerOneSpace.appendChild
//     })
//   }
// }

//   })
//   // colorSpaces.forEach((space) => {
//   //   const id = space.getAttribute('id')
//   //   id.sort
//   //   console.log(id)
//   })
//   return
// }
