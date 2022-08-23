const currencyOne = document.querySelector('#currency-one')
const currencyTwo = document.querySelector('#currency-two')
const amountOne = document.querySelector('.amount-one')
const amountTwo = document.querySelector('.amount-two')
const buttonSwap = document.querySelector('.swap')
const rateInfo = document.querySelector('.rate-info')
let currencyThree
let rate

const convert = () => {
  const URL = `https://api.exchangerate.host/convert?from=${currencyOne.value}&to=${currencyTwo.value}`

  fetch(URL)
  .then(res => res.json())
  .then(data => {
    data.query.amount = amountOne.value
    rate = data.info.rate
    amountTwo.value = (data.query.amount * data.info.rate).toFixed(2)
    rateInfo.textContent = `1 ${currencyOne.value} = ${rate} ${currencyTwo.value}`})
}

amountOne.addEventListener('input', convert)

buttonSwap.addEventListener('click', () => {
  currencyThree = currencyTwo.value 
  currencyTwo.value = currencyOne.value
  currencyOne.value = currencyThree
  convert()
})

