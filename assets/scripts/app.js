'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const events = require('./events.js')
const store = require('./store.js')
const api = require('./api.js')
const ui = require('./api.js')
$(() => {
  let currentPlayer = 'X'
  let gameBoard = ['', '', '', '', '', '', '', '', '']

  // Main Button Click Handlers
  $('#sign-up').on('submit', events.onSignUp)
  $('#sign-in').on('submit', events.onSignIn)
  $('#change-pw').on('submit', events.onChangePassword)
  $('#sign-out').on('submit', events.onSignOut)
  // $('#new-game').on('submit', (event) => {
  //   event.preventDefault()
  //   events.onNewGame()
  //   defaultState()
  // })
  $('#show-game').on('submit', events.onShowGames)
  $('#index-games').on('submit', events.onIndexGames)
  $('#new-game').on('click', (event) => {
    api.newGame()
      .then(function (responseData) {
        defaultState()
        $('#alert').text('')
        $('.box').text('')
        $('.box').removeAttr('style')
        $('.container').removeClass('hidden')
        $('#message').text('New Game!')
        $('#message').removeClass()
        $('.container').removeClass('hidden')
        $('#message').addClass('success')
        store.gameInfo = responseData.game
        store.gameCells = responseData.game.cells
        console.log(store.gameInfo)
        store.id = responseData.game.id
      })
      .catch(console.log)
  })
  let over = false
  const defaultState = function () {
    $('#alert').trigger('reset')
    turn = 0
    over = false
    currentPlayer = 'X'
    gameBoard = ['', '', '', '', '', '', '', '', '']

    $('#current-turn').text(`${currentPlayer}'s Turn`)
  }
  const changePlayerTurn = () => {
    $('#current-turn').text(`${currentPlayer}'s Turn`)
  }
  let turn = 0

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
      over = true
      $('#current-turn').text(`Its a Draw!New Game?`)
    }
  }

  // Checks the game board for win states
  const checkForWin = () => {
    if (
      gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] === 'X'
    ) {
      $('#current-turn').text('X Wins! New Game?')
      $('.0, .3, .6').css('background-color', 'green')
      over = true
      return over
    } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] === 'X') {
      $('#current-turn').text('X Wins! New Game?')
      $('.1, .4, .7').css('background-color', 'green')
      over = true
      return over
    } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] && gameBoard[2] === 'X') {
      $('#current-turn').text('X Wins! New Game?')
      $('.2, .5, .8').css('background-color', 'green')
      over = true
      return over
    } else if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] && gameBoard[0] === 'X') {
      $('#current-turn').text('X Wins! New Game?')
      $('.0, .1, .2').css('background-color', 'green')
      over = true
      return over
    } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] === 'X') {
      $('#current-turn').text('X Wins! New Game?')
      $('.3, .4, .5').css('background-color', 'green')
      over = true
      return over
    } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] === 'X') {
      $('#current-turn').text('X Wins! New Game?')
      $('.6, .7, .8').css('background-color', 'green')
      over = true
      return over
    } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] === 'X') {
      $('#current-turn').text('X Wins! New Game?')
      $('.0, .4, .8').css('background-color', 'green')
      over = true
      return over
    } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && gameBoard[2] === 'X') {
      $('#current-turn').text('X Wins! New Game?')
      $('.2, .4, .6').css('background-color', 'green')
      over = true
      return over
    } else if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6] && gameBoard[0] === 'O') {
      $('#current-turn').text('O Wins! New Game?')
      $('.0, .3, .6').css('background-color', 'green')
      over = true
      return over
    } else if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7] && gameBoard[1] === 'O') {
      $('#current-turn').text('O Wins! New Game?')
      $('.1, .4, .7').css('background-color', 'green')
      over = true
      return over
    } else if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8] && gameBoard[2] === 'O') {
      $('#current-turn').text('O Wins! New Game?')
      $('.2, .5, .8').css('background-color', 'green')
      over = true
      return over
    } else if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2] && gameBoard[0] === 'O') {
      $('#current-turn').text('O Wins! New Game?')
      $('.0, .1, .2').css('background-color', 'green')
      over = true
      return over
    } else if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5] && gameBoard[3] === 'O') {
      $('#current-turn').text('O Wins! New Game?')
      $('.3 .4, .5').css('background-color', 'green')
      over = true
      return over
    } else if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8] && gameBoard[6] === 'O') {
      $('#current-turn').text('O Wins! New Game?')
      $('.6, .7, .8').css('background-color', 'green')
      over = true
      return over
    } else if (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8] && gameBoard[0] === 'O') {
      $('#current-turn').text('O Wins! New Game?')
      $('.0, .4, .8').css('background-color', 'green')
      over = true
      return over
    } else if (gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6] && gameBoard[2] === 'O') {
      $('#current-turn').text('O Wins! New Game?')
      $('.2, .4, .6').css('background-color', 'green')
      over = true
      return over
    }
  }

  // Click Handlers for each Space

  // Created a onUpdateGame in events, that takes the currentplayer variabel and
  // the idex of the space. It passes to the events, which passes it to the API
  // which wants those two things, plus an over
  // store.game, can be used once its been defined. Can also use store.game.over, etc
  $('.0').on('click', (event) => {
    console.log($(event.target).data('index'))
    if ($(event.target).text() === '' && over === false) {
      $(event.target).text(currentPlayer)
      gameBoard[0] = currentPlayer
      $('#alert').text('')
      console.log(store.gameCells)
      turn++
      nextPlayer()
      changePlayerTurn()
      checkRound()
      checkForWin()
    } else {
      $('#alert').text('Invalid entry!')
    }
    events.onUpdateGame(currentPlayer, 0, over)
  })

  $('.1').on('click', (event) => {
    if ($(event.target).text() === '' && over === false) {
      events.onUpdateGame(currentPlayer, 1)
      $(event.target).text(currentPlayer)
      gameBoard[1] = currentPlayer
      $('#alert').text('')
      turn++
      nextPlayer()
      changePlayerTurn()
      checkRound()
      checkForWin()
    } else {
      $('#alert').text('Invalid entry!')
    }
  })

  $('.2').on('click', (event) => {
    if ($(event.target).text() === '' && over === false) {
      events.onUpdateGame(currentPlayer, 2)
      $(event.target).text(currentPlayer)
      gameBoard[2] = currentPlayer
      $('#alert').text('')
      turn++
      nextPlayer()
      changePlayerTurn()
      checkRound()
      checkForWin()
    } else {
      $('#alert').text('Invalid entry!')
    }
  })

  $('.3').on('click', (event) => {
    if ($(event.target).text() === '' && over === false) {
      events.onUpdateGame(currentPlayer, 3)
      $(event.target).text(currentPlayer)
      gameBoard[3] = currentPlayer
      $('#alert').text('')
      turn++
      nextPlayer()
      changePlayerTurn()
      checkRound()
      checkForWin()
    } else {
      $('#alert').text('Invalid entry!')
    }
  })

  $('.4').on('click', (event) => {
    if ($(event.target).text() === '' && over === false) {
      events.onUpdateGame(currentPlayer, 4)
      $(event.target).text(currentPlayer)
      gameBoard[4] = currentPlayer
      $('#alert').text('')
      turn++
      nextPlayer()
      changePlayerTurn()
      checkRound()
      checkForWin()
    } else {
      $('#alert').text('Invalid entry!')
    }
  })

  $('.5').on('click', (event) => {
    if ($(event.target).text() === '' && over === false) {
      events.onUpdateGame(currentPlayer, 5)
      $(event.target).text(currentPlayer)
      gameBoard[5] = currentPlayer
      $('#alert').text('')
      turn++
      nextPlayer()
      changePlayerTurn()
      checkRound()
      checkForWin()
    } else {
      $('#alert').text('Invalid entry!')
    }
  })

  $('.6').on('click', (event) => {
    if ($(event.target).text() === '' && over === false) {
      events.onUpdateGame(currentPlayer, 6)
      $(event.target).text(currentPlayer)
      gameBoard[6] = currentPlayer
      $('#alert').text('')
      turn++
      nextPlayer()
      changePlayerTurn()
      checkRound()
      checkForWin()
    } else {
      $('#alert').text('Invalid entry!')
    }
  })

  $('.7').on('click', (event) => {
    if ($(event.target).text() === '' && over === false) {
      events.onUpdateGame(currentPlayer, 7)
      $(event.target).text(currentPlayer)
      gameBoard[7] = currentPlayer
      $('#alert').text('')
      turn++
      nextPlayer()
      changePlayerTurn()
      checkRound()
      checkForWin()
    } else {
      $('#alert').text('Invalid entry!')
    }
  })

  $('.8').on('click', (event) => {
    if ($(event.target).text() === '' && over === false) {
      events.onUpdateGame(currentPlayer, 8)
      $(event.target).text(currentPlayer)
      gameBoard[8] = currentPlayer
      $('#alert').text('')
      turn++
      nextPlayer()
      changePlayerTurn()
      checkRound()
      checkForWin()
    } else {
      $('#alert').text('Invalid entry!')
    }
  })
})
