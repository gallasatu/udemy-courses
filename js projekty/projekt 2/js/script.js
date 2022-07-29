const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const count = document.querySelector('.count');
const error = document.querySelector('.error');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');

const countTip = () => {
 
  if (price.value == '' || people.value == '' || tip.value == '0') {
  error.textContent = 'Musisz podać wszystkie dane'
  } else {
  cost.textContent = (((Number(price.value) * Number(tip.value) )+ Number(price.value))/ Number(people.value)).toFixed(2)
 
  costInfo.style.display = 'block'
  }
}

count.addEventListener('click', countTip)

