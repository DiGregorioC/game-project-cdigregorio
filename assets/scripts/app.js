'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./app.js')

$(() => {
  // your JS code goes here

  let currentPlayer = 'X'

  // const nextPlayer = () => {
  //   if (currentPlayer === 'O') {
  //     currentPlayer = 'X'
  //   } else {
  //     currentPlayer = 'O'
  //   }
  //   return currentPlayer
  // }

  let gameBoard = ['', '', '', '', '', '', '', '', '']

  $('.0').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[0] = currentPlayer
    console.log(gameBoard)
  })

  $('.1').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[1] = currentPlayer
  })

  $('.2').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[2] = currentPlayer
  })

  $('.3').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[3] = currentPlayer
  })

  $('.4').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[4] = currentPlayer
  })

  $('.5').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[5] = currentPlayer
  })

  $('.6').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[6] = currentPlayer
  })

  $('.7').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[7] = currentPlayer
  })

  $('.8').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[8] = currentPlayer
  })
})
