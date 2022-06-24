const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')
const button = document.querySelector('.color')
const p = document.querySelector('p')
let number = 36

console.log(sizeUp, sizeDown, button, p)


const enlarge = () => {
  number += 5
  p.style.fontSize = `${number}px`
}

const reduce = () => {
  if (number <= 10) 
    return
    number -= 5
  p.style.fontSize = `${number}px`
}

const changeColor = () => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)

  p.style.color = `rgb(${r}, ${g}, ${b})`
}

sizeUp.addEventListener('click', enlarge)
sizeDown.addEventListener('click', reduce)
button.addEventListener('click', changeColor)
