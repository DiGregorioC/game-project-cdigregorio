'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('.1').click(function () {
    $(this).html('<p>TEXT<p>')
  })

  $('.2').click(function () {
    console.log('You clicked 2')
  })
  $('.3').click(function () {
    console.log('You clicked 3')
  })
  $('.4').click(function () {
    console.log('You clicked 4')
  })
  $('.5').click(function () {
    console.log('You clicked 5')
  })
  $('.6').click(function () {
    console.log('You clicked 6')
  })
  $('.7').click(function () {
    console.log('You clicked 7')
  })
  $('.8').click(function () {
    console.log('You clicked 8')
  })
  $('.9').click(function () {
    console.log('You clicked 9')
  })
})
