const input = document.querySelector('input')
const btnConvert = document.querySelector('.conv')
const btnReset = document.querySelector('.reset')
const btnChange = document.querySelector('.change')
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const result = document.querySelector('.result')
let temp
let fahrenheit
let celsius


const getTemp = () => {
  temp = input.value
}

const convert = () => {
  if (one.textContent == '°C') {
  fahrenheit = (temp * 9/5) + 32
  result.textContent = `${temp}°C = ${fahrenheit}°F`
  } else {
    celsius = (temp - 32) * 5/9
    result.textContent = `${temp}°F = ${celsius}°C`
  }
}

const reset = () => {
  input.value = ''
  result.textContent = ''
}

const change = () => {
  console.log(one, two)
  if (one.textContent == '°C') {
    one.textContent = '°F'
    two.textContent = '°C'
  } else {
    one.textContent = '°C'
    two.textContent = '°F'
  }
  result.textContent = ''
}

input.addEventListener('input', getTemp)
btnConvert.addEventListener('click', convert)
btnReset.addEventListener('click', reset)
btnChange.addEventListener('click', change)
