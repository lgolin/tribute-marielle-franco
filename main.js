$(document).ready(function () {
  $('.submit').click(function (event) {
    console.log('Clicked button')

    var email = $('.email').val()
    var firsname = $('.firsname').val()
    var surname = $('.surname').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    if (firsname.length >= 2) {
      statusElm.append('<div>Name is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Name is invalid</div>')
    }

    if (surname.length >= 2) {
      statusElm.append('<div>Surname is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Surname is invalid</div>')
    }

    if (email.length > 2 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>Email is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Email is invalid</div>')
    }

    if (message.length > 10) {
      statusElm.append('<div>Message is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Message is invalid</div>')
    }
  })
})