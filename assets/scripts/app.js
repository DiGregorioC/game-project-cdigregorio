'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')

$(() => {
  // your JS code goes here
  let turn = 0
  let gameOn = true
  let currentPlayer = 'X'

  $('#current-turn').text(`${currentPlayer}'s Turn`)

  const gameBoard = ['', '', '', '', '', '', '', '', '']

  const changePlayerTurn = () => {
    $('#current-turn').text(`${currentPlayer}'s Turn`)
  }

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
      $('#current-turn').text('GAME OVER! ITS A DRAW!')
    } else {
      gameOn = true
    }
  }

  // const diableAllClicks = () => {
  //   gameBoard.forEach(() =>
  //     $(event.target).off())
  // }


  const drawDisable = () => {
    gameBoard.forEach((i) => {
      if (i === 'X' || i === 'O') {
        $(event.target).off()
      }
    })
  }

  const checkForWin = () => {
    if (
      gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] === 'X'
    ) {
      $('#current-turn').text('X Wins!')
    } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] === 'X'
    ) {
      $('#current-turn').text('X Wins!')
    } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] && gameBoard[2] === 'X'
    ) {
      $('#current-turn').text('X Wins!')
    } else if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] && gameBoard[0] === 'X'
    ) {
      $('#current-turn').text('X Wins!')
    } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] === 'X'
    ) {
      $('#current-turn').text('X Wins!')
    } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] === 'X'
    ) {
      $('#current-turn').text('X Wins!')
    } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] === 'X'
    ) {
      $('#current-turn').text('X Wins!')
    } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && gameBoard[2] === 'X'
    ) {
      $('#current-turn').text('X Wins!')
    } else if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] === 'O'
    ) {
      $('#current-turn').text('O Wins!')
    } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] === 'O'
    ) {
      $('#game-status').text('O Wins!')
    } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] && gameBoard[2] === 'O'
    ) {
      $('#current-turn').text('O Wins!')
    } else if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] && gameBoard[0] === 'O'
    ) {
      $('#current-turn').text('O Wins!')
    } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] === 'O'
    ) {
      $('#current-turn').text('O Wins!')
    } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] === 'O'
    ) {
      $('#current-turn').text('O Wins!')
    } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] === 'O'
    ) {
      $('#current-turn').text('O Wins!')
    } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && gameBoard[2] === 'O'
    ) {
      $('#current-turn').text('O Wins!')
    }
  }

  $('.0').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[0] = currentPlayer
    nextPlayer()
    console.log(gameBoard)
    console.log(turn)
    turn++
    changePlayerTurn()
    drawDisable()
    checkRound()
    checkForWin()
    return turn
  })

  $('.1').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[1] = currentPlayer
    turn++
    nextPlayer()
    console.log(turn)
    changePlayerTurn()
    drawDisable()
    checkRound()
    checkForWin()
    return turn
  })

  $('.2').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[2] = currentPlayer
    turn++
    nextPlayer()
    changePlayerTurn()
    drawDisable()
    checkRound()
    checkForWin()
    console.log(turn)
  })

  $('.3').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[3] = currentPlayer
    turn++
    nextPlayer()
    changePlayerTurn()
    drawDisable()
    checkRound()
    checkForWin()
    console.log(turn)
  })

  $('.4').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[4] = currentPlayer
    turn++
    nextPlayer()
    changePlayerTurn()
    drawDisable()
    checkRound()
    checkForWin()
    console.log(turn)
  })

  $('.5').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[5] = currentPlayer
    turn++
    nextPlayer()
    changePlayerTurn()
    drawDisable()
    checkRound()
    checkForWin()
    console.log(turn)
  })

  $('.6').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[6] = currentPlayer
    turn++
    nextPlayer()
    changePlayerTurn()
    drawDisable()
    checkRound()
    checkForWin()
    console.log(turn)
  })

  $('.7').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[7] = currentPlayer
    turn++
    nextPlayer()
    changePlayerTurn()
    drawDisable()
    checkRound()
    checkForWin()
    console.log(turn)
  })

  $('.8').on('click', (event) => {
    $(event.target).text(currentPlayer)
    gameBoard[8] = currentPlayer
    turn++
    nextPlayer()
    changePlayerTurn()
    drawDisable()
    checkRound()
    checkForWin()
    console.log(turn)

    return turn
  })
})
