const ball = document.querySelector('.ball-img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');
const answers = ['Tak', 'Nie', 'Wolisz nie znać odpowiedzi na to pytanie', 'Być może', 'Jeśli się bardzo postarasz', 'Oczywiście', 'Nigdy się nie dowiesz', 'Jeden rabin powie tak, drugi powie nie', 'Co to za głupie pytanie', 'W żadnym wypadku']

const shake = () => {
  ball.classList.add('shake-animation')
  setTimeout(checkAnswer, 1000)
}

const checkAnswer = () => {
  answer.textContent = ''
  error.textContent = ''
  ball.classList.remove('shake-animation')
      if (input.value == '') {
        error.textContent = 'Musisz zadać jakieś pytanie'
      } else if (input.value.slice(-1) != '?') {
        error.textContent = 'Pytanie musi kończyć się znakiem zapytania'
      } else {
        answer.innerHTML = `<span>Odpowiedź:</span>  ${answers[Math.floor(Math.random() * answers.length)]}`
      } 
}

ball.addEventListener('click', shake)
