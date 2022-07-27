document.addEventListener('DOMContentLoaded', function () {

const nav = document.querySelector('.navbar');
const collapse = document.querySelector('.collapse');
const links = document.querySelectorAll('.nav-link');

function addShadow () {
  if (window.scrollY >= 100) {
    nav.classList.add('shadow-bg')
  } else {
    nav.classList.remove('shadow-bg')
  }
}

links.forEach(item => item.addEventListener('click', () => collapse.classList.remove('show')))

window.addEventListener('scroll', addShadow)
})

