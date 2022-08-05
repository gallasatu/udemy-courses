const questionMark = document.querySelector('.fa-question');
const stopWatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const play = document.querySelector('.start');
const pause = document.querySelector('.pause');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const history = document.querySelector('.history');
const timeList = document.querySelector('.time-list');
const modalShadow = document.querySelector('.modal-shadow')
const modal = document.querySelector('.modal');
let minutes = 0
let seconds = 0
let count
let minutes2
let seconds2
let number = 0

const timeCount = () => {
  if (seconds == 60) {
    seconds = 0
    minutes++
  }
  seconds = seconds <= 9 ? '0' + seconds : seconds
  stopWatch.textContent = `${minutes}:${seconds}`
  
  if (minutes < 10) {
    stopWatch.textContent = `0${minutes}:${seconds}`
  }
  seconds++ 
}

const startTime = () => {
  timeCount()
  clearInterval(count)
  count = setInterval('timeCount()', 1000)
}

const pauseTime = () => {
  clearInterval(count)
}

const stopTime = () => {
  clearInterval(count)
  if (minutes != 0 || seconds != 0) {
  
  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds
  time.textContent = `Ostatni czas: ${minutes}:${seconds}`
  let li = document.createElement('li')
  number++
  li.innerHTML = `Pomiar nr ${number}: <span>${minutes}:${seconds}</span>`
  timeList.appendChild(li)
  timeList.style.visibility = 'hidden'
  time.style.visibility = 'visible'
  minutes = 0
  seconds = 0
  stopWatch.textContent = `0${minutes}:0${seconds}`
  }
  
}

const resetTime = () => {
  clearInterval(count)
  minutes = 0
  seconds = 0
  stopWatch.textContent = `0${minutes}:0${seconds}`
  time.style.visibility = 'hidden'
  timeList.innerHTML = ''
  number = 0
}

const showHistory = () => {
  timeList.style.visibility = 'visible'
}

const showModal = () => {
  modalShadow.style.display = 'block'
  modal.classList.add('modal-animation')
  const close = document.querySelector('.close')

const closeModal = () => {
  modalShadow.style.display = 'none'
  modal.classList.remove('modal-animation')
}

  close.addEventListener('click', closeModal)
  modalShadow.addEventListener('click', closeModal)
}

play.addEventListener('click', startTime)
pause.addEventListener('click', pauseTime)
stop.addEventListener('click', stopTime)
reset.addEventListener('click', resetTime)
history.addEventListener('click', showHistory)
questionMark.addEventListener('click', showModal)
