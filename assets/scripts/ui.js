'use strict'

const store = require('./store.js')

const onSignUpSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Signed up Successfully! :)')
  $('#message').removeClass()
  $('#message').addClass('success')
}

const onSignInSuccess = responseData => {
  console.log('success', responseData)
  $('#message').text('Signed In Successfully! :)')
  $('#message').removeClass()
  $('#message').addClass('success')

  store.user = responseData.user
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess
}
