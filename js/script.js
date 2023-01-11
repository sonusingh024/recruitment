const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
  navigation.classList.toggle('active')
})

document.getElementById('menu-toggle').addEventListener('click', function () {
  document.body.classList.toggle('nav-open')
})
