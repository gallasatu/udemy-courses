const username = document.querySelector('#username');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const cleanBtn = document.querySelector('.clear');
const sendBtn = document.querySelector('.send');
const popUp = document.querySelector('.popup');
const closeBtn = document.querySelector('.close');
const errors = document.querySelectorAll('.error-text');


const setUsername = () => {
  if (username.value.length <= 3) {
    username.parentElement.classList.add('error')
  } else {
    username.parentElement.classList.remove('error')
  }
}

const setPassword = () => {
  if (password.value.length <= 7) {
    password.parentElement.classList.add('error')
  } else {
    password.parentElement.classList.remove('error')
  }
}

const setPassword2 = () => {
  if (password.value !== password2.value) {
    password2.parentElement.classList.add('error')
  } else {
    password2.parentElement.classList.remove('error')
  }
}

const setEmail = () => {
  if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    email.parentElement.classList.remove('error')
  } else {
    email.parentElement.classList.add('error')
  }
}

const clean = () => {
  username.value = ''
  password.value = ''
  password2.value = ''
  email.value = ''
  errors.forEach(item => item.classList.remove('error'))
}

const send = (event) => {
  if (username.value.length > 3 && password.value.length > 7 && password.value === password2.value && email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    event.preventDefault();
    popUp.classList.add('show-popup')
  }
}

username.addEventListener('input', setUsername)
password.addEventListener('input', setPassword)
password2.addEventListener('input', setPassword2)
email.addEventListener('input', setEmail)
cleanBtn.addEventListener('click', clean)
sendBtn.addEventListener('click', send)