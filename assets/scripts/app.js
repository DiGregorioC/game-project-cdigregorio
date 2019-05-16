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

  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-pw').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  // $('.new-game').on('click', events.onNewGame)
  $('#show-game').on('submit', events.onShowGames)
  $('#index-games').on('submit', events.onIndexGames)
  $('#new-game').on('submit', (event) => {
    event.preventDefault()
    gameBoard = ['', '', '', '', '', '', '', '', '']
    turn = 0
    currentPlayer = 'X'
    $('.0, .1, .2, .3, .4, .5, .6, .7, .8').text('')
    $('.0, .1, .2, .3, .4, .5, .6, .7, .8').removeAttr('style')
    gameOn = true
  })

  $('#current-turn').text(`${currentPlayer}'s Turn`)

  let gameBoard = ['', '', '', '', '', '', '', '', '']

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
      $('#current-turn').text(`Its a Draw!\nNew Game?`)
    }
  }

  const gameOver = () => {
    if (gameOn === false) {
      $('.0').off('click')
      $('.1').off('click')
      $('.2').off('click')
      $('.3').off('click')
      $('.4').off('click')
      $('.5').off('click')
      $('.6').off('click')
      $('.7').off('click')
      $('.8').off('click')
    }
  }

  // const reClickDisable = () => {
  //   gameBoard.forEach((i) => {
  //     if (i === 'X' || i === 'O') {
  //       $(event.target).off('click')
  //     }
  //   })
  // }

  const checkForWin = () => {
    if (
      gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] === 'X'
    ) {
      $('#current-turn').text('X Wins!\n New Game?')
      $('.0, .3, .6').css('background-color', 'green')
      gameOn = false
      return gameOn
    } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] === 'X'
    ) {
      $('#current-turn').text('X Wins!\n New Game?')
      $('.1, .4, .7').css('background-color', 'green')
      gameOn = false
      return gameOn
    } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] && gameBoard[2] === 'X'
    ) {
      $('#current-turn').text('X Wins!\n New Game?')
      $('.2, .5, .8').css('background-color', 'green')
      gameOn = false
      return gameOn
    } else if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] && gameBoard[0] === 'X'
    ) {
      $('#current-turn').text('X Wins!\n New Game?')
      $('.0, .1, .2').css('background-color', 'green')
      gameOn = false
      return gameOn
    } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] === 'X'
    ) {
      $('#current-turn').text('X Wins!\n New Game?')
      $('.3, .4, .5').css('background-color', 'green')
      gameOn = false
      return gameOn
    } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] === 'X'
    ) {
      $('#current-turn').text('X Wins!\n New Game?')
      $('.6, .7, .8').css('background-color', 'green')
      gameOn = false
      return gameOn
    } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] === 'X'
    ) {
      $('#current-turn').text('X Wins!\n New Game?')
      $('.0, .4, .8').css('background-color', 'green')
      gameOn = false
      return gameOn
    } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && gameBoard[2] === 'X'
    ) {
      $('#current-turn').text('X Wins!\n New Game?')
      $('.2, .4, .8').css('background-color', 'green')
      gameOn = false
      return gameOn
    } else if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] === 'O'
    ) {
      $('#current-turn').text('O Wins!\n New Game?')
      $('.0, .3, .6').css('background-color', 'green')
      gameOn = false
      return gameOn
    } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] === 'O'
    ) {
      $('#current-turn').text('O Wins!\n New Game?')
      $('.1, .4, .7').css('background-color', 'green')
      gameOn = false
      return gameOn
    } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] && gameBoard[2] === 'O'
    ) {
      $('#current-turn').text('O Wins!\n New Game?')
      $('.2, .5, .8').css('background-color', 'green')
      gameOn = false
      return gameOn
    } else if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] && gameBoard[0] === 'O'
    ) {
      $('#current-turn').text('O Wins!\n New Game?')
      $('.0, .1, .2').css('background-color', 'green')
      gameOn = false
      return gameOn
    } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] === 'O'
    ) {
      $('#current-turn').text('O Wins!\n New Game?')
      $('.3 .4, .5').css('background-color', 'green')
      gameOn = false
      return gameOn
    } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] === 'O'
    ) {
      $('#current-turn').text('O Wins!\n New Game?')
      $('.6, .7, .8').css('background-color', 'green')
      gameOn = false
      return gameOn
    } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] === 'O'
    ) {
      $('#current-turn').text('O Wins!\n New Game?')
      $('.0, .4, .8').css('background-color', 'green')
      gameOn = false
      return gameOn
    } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && gameBoard[2] === 'O'
    ) {
      $('#current-turn').text('O Wins!\n New Game?')
      $('.2, .4, .6').css('background-color', 'green')
      gameOn = false
      return gameOn
    }
  }

  $('.0').on('click', (event) => {
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer)
      gameBoard[0] = currentPlayer
      turn++
      nextPlayer()
      changePlayerTurn()
      checkRound()
      checkForWin()
      gameOver()
    } else {
      $('#alert').text('Invalid entry! Space Already Taken!').fadeIn().fadeOut(3000, 'linear')
    }
  })

  $('.1').on('click', (event) => {
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer)
      gameBoard[1] = currentPlayer
      turn++
      nextPlayer()
      changePlayerTurn()
      checkRound()
      checkForWin()
      gameOver()
    } else {
      $('#alert').text('Invalid entry! Space Already Taken!').fadeIn().fadeOut(3000, 'linear')
    }
  })

  $('.2').on('click', (event) => {
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer)
      gameBoard[2] = currentPlayer
      turn++
      nextPlayer()
      changePlayerTurn()
      checkRound()
      checkForWin()
      gameOver()
    } else {
      $('#alert').text('Invalid entry! Space Already Taken!').fadeIn().fadeOut(3000, 'linear')
    }
  })

  $('.3').on('click', (event) => {
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer)
      gameBoard[3] = currentPlayer
      turn++
      nextPlayer()
      changePlayerTurn()
      checkRound()
      checkForWin()
      gameOver()
    } else {
      $('#alert').text('Invalid entry! Space Already Taken!').fadeIn().fadeOut(3000, 'linear')
    }
  })

  $('.4').on('click', (event) => {
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer)
      gameBoard[4] = currentPlayer
      turn++
      nextPlayer()
      changePlayerTurn()
      checkRound()
      checkForWin()
      gameOver()
    } else {
      $('#alert').text('Invalid entry! Space Already Taken!').fadeIn().fadeOut(3000, 'linear')
    }
  })

  $('.5').on('click', (event) => {
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer)
      gameBoard[5] = currentPlayer
      turn++
      nextPlayer()
      changePlayerTurn()
      checkRound()
      checkForWin()
      gameOver()
    } else {
      $('#alert').text('Invalid entry! Space Already Taken!').fadeIn().fadeOut(3000, 'linear')
    }
  })

  $('.6').on('click', (event) => {
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer)
      gameBoard[6] = currentPlayer
      turn++
      nextPlayer()
      changePlayerTurn()
      checkRound()
      checkForWin()
      gameOver()
    } else {
      $('#alert').text('Invalid entry! Space Already Taken!').fadeIn().fadeOut(3000, 'linear')
    }
  })

  $('.7').on('click', (event) => {
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer)
      gameBoard[7] = currentPlayer
      turn++
      nextPlayer()
      changePlayerTurn()
      checkRound()
      checkForWin()
      gameOver()
    } else {
      $('#alert').text('Invalid entry! Space Already Taken!').fadeIn().fadeOut(3000, 'linear')
    }
  })

  $('.8').on('click', (event) => {
    if ($(event.target).text() === '') {
      $(event.target).text(currentPlayer)
      gameBoard[8] = currentPlayer
      turn++
      nextPlayer()
      changePlayerTurn()
      checkRound()
      checkForWin()
      gameOver()
    } else {
      $('#alert').text('Invalid entry! Space Already Taken!').fadeIn().fadeOut(3000, 'linear')
    }
  })
})
