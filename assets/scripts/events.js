
const onClick = (event) => {
  event.preventDefault()
  $(this).html('<p>X<p>')
}

module.exports = {
  onClick
}
