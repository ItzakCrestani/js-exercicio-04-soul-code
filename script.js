const button = document.querySelector('#btn-on-off')

button.addEventListener('click', function () {
  let background = document.querySelector('.background')
  let light = document.querySelector('.light')

  background.classList.toggle('background-on')
  light.classList.toggle('on')
})
