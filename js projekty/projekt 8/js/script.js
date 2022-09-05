const addButton = document.querySelector('.add-transaction')
const deleteButton = document.querySelector('.delete-all')
const transactionPanel = document.querySelector('.add-transaction-panel')
const incomeArea = document.querySelector('.income-area')
const expensesArea = document.querySelector('.expenses-area')
const availableMoney = document.querySelector('.available-money')
const lightButton = document.querySelector('.light')
const darkButton = document.querySelector('.dark')
const root = document.documentElement
const body = document.querySelector('body')
const save = document.querySelector('.save')
const cancel = document.querySelector('.cancel')
const name = document.querySelector('#name')
const amount = document.querySelector('#amount')
const category = document.querySelector('#category')
let transaction
let number = 0
let money = 0
let moneyArr = [0];



const addTransaction = () => {
  transactionPanel.style.display = 'flex'
  name.value = ''
  amount.value = ''
  category.value = 'none'
 }

 const saveTransaction = () => {
  let nameTransaction = name.value
  let amountTransaction = amount.value
  let categoryTransaction = category.value

  transactionPanel.style.display = 'none'

  transaction = document.createElement('div')
  transaction.classList.add('transaction')
  transaction.setAttribute('id', `${number}`)
  number++
  let icon
  
  switch (category.value) {
    case 'income':
      icon = `money-bill-wave`
      incomeArea.appendChild(transaction)
      break;

    case 'shopping':
      icon = `cart-arrow-down`
      expensesArea.appendChild(transaction)
      break;

    case 'food':
      icon = `hamburger`
      expensesArea.appendChild(transaction)
      break;

    case 'cinema':
     icon = `film`
      expensesArea.appendChild(transaction)
      break
  }
  transaction.innerHTML = `<p class="transaction-name"><i class="fas fa-${icon}"></i>${nameTransaction}</p>
  <p class="transaction-amount">${amountTransaction}zł <button class="delete"><i class="fas fa-times"></i></button></p>`

  amount.value > 0 ? incomeArea.appendChild(transaction) && transaction.classList.add('income') : expensesArea.appendChild(transaction) && transaction.classList.add('expense');
  moneyArr.push(parseFloat(amount.value));
  countMoney(moneyArr)
  
  // money = Number(money) + Number(amountTransaction)
  // availableMoney.textContent = `${money}zł`
  // const deleteTransaction = transaction.lastChild.lastChild
  // deleteTransaction.addEventListener('click', () => {
  //   transaction.remove()
  // })
}

const countMoney = money => {
  const newMoney = money.reduce((a, b) => a + b);
  availableMoney.textContent = `${newMoney}zł`;
}

const deleteTransaction = id => {
  const transactionToDelete = document.getElementById(id);
  const transactionAmount = parseFloat(transactionToDelete.childNodes[3].innerText);
  const indexOfTransaction = moneyArr.indexOf(transactionAmount);

  moneyArr.splice(indexOfTransaction, 1)

  transactionToDelete.classList.contains('income') ? incomeArea.removeChild(transactionToDelete) : expensesArea.removeChild(transactionToDelete)
  countMoney(moneyArr)
}

const cancelTransaction = () => {
  transactionPanel.style.display = 'none'
}


 const darkColors = () => { 
  root.style.setProperty('--first-color', '#14161F');
  root.style.setProperty('--second-color', '#F9F9F9');
  root.style.setProperty('--border-color', 'rgba(255, 255, 255, .4)');
}


 const lightColors = () => {
  root.style.setProperty('--first-color', '#F9F9F9');
  root.style.setProperty('--second-color', '#14161F');
  root.style.setProperty('--border-color', 'rgba(0, 0, 0, .2)');
 }

 const deleteAll = () => { 
  const transactions = document.querySelectorAll('.transaction')
  transactions.forEach(el => el.remove())
  number = 0
  money = 0
  availableMoney.textContent = `${money}zł`

  }

addButton.addEventListener('click', addTransaction)
lightButton.addEventListener('click', lightColors)
darkButton.addEventListener('click', darkColors)
deleteButton.addEventListener('click', deleteAll)

save.addEventListener('click', saveTransaction)
cancel.addEventListener('click', cancelTransaction)