'use strict'

const store = require('./store.js')

const onSignUpSuccess = responseData => {
  console.log('success', responseData)
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
  console.log('success', responseData)
  $('.container').removeClass('hidden')
  $('#change-pw').removeClass('hidden')
  $('#sign-out').removeClass('hidden')
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
  console.log('success', responseData)
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
  console.log('success', responseData)
  $('.container').addClass('hidden')
  $('#sign-up').removeClass('hidden')
  $('#sign-in').removeClass('hidden')
  $('#change-pw').addClass('hidden')
  $('#sign-out').addClass('hidden')
  $('#message').text('Sign Out Successfull! Come Back Soon!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('form').trigger('reset')
}

const onNewGameSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Game Started!')
  $('#message').removeClass()
  $('#message').addClass('success')
  $('.box').on('click')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onChangePWSuccess,
  onSignOutSuccess,
  onChangePWFailure,
  onSignInFailure,
  onSignUpFailure,
  onNewGameSuccess
}
