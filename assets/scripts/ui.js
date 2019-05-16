'use strict'

const store = require('./store.js')

const onSignUpSuccess = responseData => {
  $('#message').text('Signed up Successfully! Please log in to Play!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const onSignUpFailure = responseData => {
  $('#message').text('Sign Up Failed, Please try again!')
  $('#message').removeClass()
  $('#message').addClass('warning')
  $('form').trigger('reset')
}

const onSignInSuccess = responseData => {
  $('.container').removeClass('hidden')
  $('#change-pw').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
  $('#index-games').removeClass('hidden')
  $('#show-game').removeClass('hidden')
  $('#sign-up').addClass('hidden')
  $('#sign-in').addClass('hidden')
  $('#message').text('Signed In, Welcome Back!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')

  store.user = responseData.user
}
const onSignInFailure = responseData => {
  $('#message').text('Sign In Failed, Please try again!')
  $('#message').removeClass()
  $('#message').addClass('warning')
  $('form').trigger('reset')
}

const onChangePWSuccess = responseData => {
  $('#message').text('Password Changed Successfully!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const onChangePWFailure = responseData => {
  $('#message').text('Password not Changed, please try again!')
  $('#message').removeClass()
  $('#message').addClass('warning')
  $('form').trigger('reset')
}

const onSignOutSuccess = responseData => {
  $('.container').addClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#index-games').addClass('hidden')
  $('#change-pw').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#message').text('Sign Out Successfull! Come Back Soon!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const onNewGameSuccess = responseData => {
  $('#message').text('Game Started!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.box').on('click')
}

const onIndexSuccess = responseData => {
  $('#game-index').html('')
  if (responseData.games.length > 0) {
    responseData.games.forEach(games => {
      const gameIndex = `
      <p>ID: ${games.id}</p>
      <p>Game: ${games.cells}</p>
      <p>Game Finished?: ${games.over}</p>
      <p>Player ID: ${games.player_x.id}</p>
      <p>Player Email: ${games.player_x.email}</p>
      <hr>`
      $('#game-index').append(gameIndex)
    })
    $('#message').text('Success! Games are Below')
    $('#message').removeClass()
    $('#message').addClass('success')
  } else {
    $('#message').text('No Games to Display! Play Some First :)')
    $('#message').removeClass()
    $('#message').addClass('warning')
    $('form').trigger('reset')
  }
}

const onShowSuccess = responseData => {
  $('#game-index').html('')
  const games = responseData.game
  const gameIndex = `
      <p>ID: ${games.id}</p>
      <p>Game: ${games.cells}</p>
      <p>Game Finished?: ${games.over}</p>
      <p>Player ID: ${games.player_x.id}</p>
      <p>Player Email: ${games.player_x.email}</p>
      <hr>`
  $('#game-index').html(gameIndex)
  $('#message').text('Success! Your Game is Below')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const onShowFailure = responseData => {
  $('#message').text('Invalid ID, Please Try again!')
  $('#message').removeClass()
  $('#message').addClass('warning')
  $('form').trigger('reset')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePWSuccess,
  onSignOutSuccess,
  onChangePWFailure,
  onSignInFailure,
  onSignUpFailure,
  onNewGameSuccess,
  onIndexSuccess,
  onShowSuccess,
  onShowFailure
}
