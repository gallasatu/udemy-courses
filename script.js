const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;
let password 

// console.log(pass, p, letters, numbers, special, minValue)

const changedValue = () => {
  console.log(pass.value.length)
  if (pass.value.length >= 10 && letters.test(pass.value) && numbers.test(pass.value) && special.test(pass.value)) {
    p.style.color = 'green'
    p.textContent = 'Masz  bardzo dobre hasło :)'
  } else if (pass.value.length >= minValue && letters.test(pass.value) && numbers.test(pass.value)) {
    p.style.color = 'green'
    p.textContent = 'Masz dobre hasło :)'
  } else {
    p.style.color = 'red'
    p.textContent = 'Masz słabe hasło!' 
  }
}

const checkPassword = (e) => {
  if (e.target.value !== '') {
    changedValue()
  } else {
    p.style.color = ''
    p.textContent = 'Nie podałeś hasła...'
  }
}


pass.addEventListener('input', checkPassword)