const LAST_LOGIN = document.getElementById('last_login')
const windowTitle = document.getElementById('window_title')
const _date = new Date()
const [day, month, date, _, time] = _date.toString().split(' ')
const CURRENT_DATE_TIME = `Last login: ${day} ${month} ${date} ${time} on ttys000`

LAST_LOGIN.innerText = CURRENT_DATE_TIME

const { height = innerHeight, width = innerWidth } = window

const updateTitle = () => {
  const { height = innerHeight, width = innerWidth } = window
  windowTitle.innerText = `🏠 oliver -- zsh -- ${width}x${height}`
}

updateTitle()

window.addEventListener('resize', (e) => {
  updateTitle()
})

const printer = document.getElementById('printer')
printer.addEventListener('click', (e) => {
  document.querySelector('main').style.overflowY = 'visible'
  window.print()
  document.querySelector('main').style.overflowY = 'auto'
})
