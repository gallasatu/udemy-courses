const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')
const p = document.querySelector('p')

function Menu(name, price) {
    this.name = name
    this.price = price
  }

  const newMenu1 = new Menu('Schabowy', 29)
  const newMenu2 = new Menu('Pizza', 25)
  const newMenu3 = new Menu('Zupa', 8)

Menu.prototype.showMenu = function () {
  console.log(`${this.name} kosztuje ${this.price} zł.`)
}

btn1.addEventListener('click', () => newMenu1.showMenu())
btn2.addEventListener('click', () => newMenu2.showMenu())
btn3.addEventListener('click', () => newMenu3.showMenu())

