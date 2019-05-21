
const getFormFields = require('../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')

const onSignUp = event => {
  event.preventDefault()
  const form = (event.target)
  const formData = getFormFields(form)

  api.signUp(formData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFailure)
}

const onSignIn = event => {
  event.preventDefault()
  const form = (event.target)
  const formData = getFormFields(form)

  api.signIn(formData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFailure)
}

const onChangePassword = event => {
  event.preventDefault()
  const form = (event.target)
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(ui.onChangePWSuccess)
    .catch(ui.onChangePWFailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFailure)
}

const onNewGame = event => {
  event.preventDefault()
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onNewGameFailure)
}

const onUpdateGame = (value, status, index) => {
  api.updateGame(value, status, index)
    .then(ui.onUpdateSuccess)
    .catch(ui.onUpdateFailure)
}

const onIndexGames = (event) => {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
}

const onShowGames = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.show(formData.games.id)
    .then(ui.onShowSuccess)
    .catch(ui.onShowFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onIndexGames,
  onShowGames,
  onUpdateGame
}
