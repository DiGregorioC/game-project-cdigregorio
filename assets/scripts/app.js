'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./app.js')

$(() => {
  // your JS code goes here
  let turn = 0
  let gameOn = true
  let currentPlayer = 'X'
  const changePlayerTurn = () => {
    $('#current-turn').text(`${currentPlayer}'s Turn`)
  }

  $('#current-turn').text(`${currentPlayer}'s Turn`)
  $('#game-status').text()

  const gameBoard = ['', '', '', '', '', '', '', '', '']

  const nextPlayer = () => {
    if (currentPlayer === 'O') {
      currentPlayer = 'X'
    } else {
      currentPlayer = 'O'
    }
    return currentPlayer
  }

  const checkRound = () => {
    if (turn >= 9) {
      gameOn = false
      $('#game-status').text('GAME OVER! ITS A DRAW!')
    } else {
      gameOn = true
    }
  }

  const checkForPiece = (i) => {
    if (gameBoard[i] === 'X' || gameBoard[i] === 'O') {
      console.log('Space Taken')
    }
  }

  $('.0').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[0] = currentPlayer
    checkForPiece()
    nextPlayer()
    console.log(gameBoard)
    console.log(turn)
    turn++
    changePlayerTurn()
    checkRound()
    return turn
  })

  $('.1').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[1] = currentPlayer
    turn++
    nextPlayer()
    console.log(turn)
    changePlayerTurn()
    checkRound()
    return turn
  })

  $('.2').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[2] = currentPlayer
    turn++
    nextPlayer()
    changePlayerTurn()
    checkRound()
    console.log(turn)
  })

  $('.3').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[3] = currentPlayer
    turn++
    nextPlayer()
    changePlayerTurn()
    checkRound()
    console.log(turn)
  })

  $('.4').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[4] = currentPlayer
    turn++
    nextPlayer()
    changePlayerTurn()
    checkRound()
    console.log(turn)
  })

  $('.5').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[5] = currentPlayer
    turn++
    nextPlayer()
    changePlayerTurn()
    checkRound()
    console.log(turn)
  })

  $('.6').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[6] = currentPlayer
    turn++
    nextPlayer()
    changePlayerTurn()
    checkRound()
    console.log(turn)
  })

  $('.7').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[7] = currentPlayer
    turn++
    nextPlayer()
    changePlayerTurn()
    checkRound()
    console.log(turn)
  })

  $('.8').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[8] = currentPlayer
    turn++
    nextPlayer()
    changePlayerTurn()
    checkRound()
    console.log(turn)

    return turn
  })
})
