const input = document.querySelector('input') 
const btnAdd = document.querySelector('button') 
const error = document.querySelector('.error-info')
const ul = document.querySelector('ul') 
const task = document.querySelector('li')
const tools = document.querySelector('.tools')
const popup = document.querySelector('.popup')
let liList = document.querySelectorAll('li')
let newContent
let newTaskLi
let newTaskDiv
let popupError
let btnAccept
let btnCancel
let toDoToEdit

error.textContent = ''
if (liList.length == 0) {
  error.textContent = 'Brak zadań na liście!'
}

const type = () => {
  newContent = input.value
  console.log(newContent)
  }

const add = () => {
  if (!!newContent) {

    newTaskLi = document.createElement('li')
    newTaskLi.textContent = newContent
    
    newTaskDiv = document.createElement('div')
    newTaskDiv.classList.add('tools')

    const complete = document.createElement('button')
    complete.classList.add('complete')
    complete.innerHTML = '<i class="fas fa-check"></i>'

    const edit = document.createElement('button')
    edit.classList.add('edit')
    edit.textContent = 'EDIT'

    const deleteX = document.createElement('button')
    deleteX.classList.add('delete')
    deleteX.innerHTML = '<i class="fas fa-times"></i></button>'

    newTaskDiv.append(complete, edit, deleteX)
    newTaskLi.appendChild(newTaskDiv)
    ul.appendChild(newTaskLi)

    input.value = ''
    newContent = ''
    error.textContent = ''

    

    // const crossOut = () => {
    //   if (complete.classList.contains('complete')) {
    //     liList[id - 1].classList.add('completed')
    //     complete.classList.remove('complete')
    //     complete.classList.add('completed')
    //   } else {
    //     liList[id - 1].classList.remove('completed')
    //     complete.classList.remove('completed')
    //     complete.classList.add('complete')
    //   }
    // }

    

    

    // complete.addEventListener('click', crossOut)
    // edit.addEventListener('click', editTask)
    // deleteX.addEventListener('click', deleteTask)
  } else {
     error.textContent = 'Wpisz treść zadania!'
  }
}

const checkClick = (e) => {
  if (e.target.matches('.complete')) {
    console.log(e)
    e.target.closest('li').classList.toggle('completed')
    e.target.classList.toggle('completed')
  } else if (e.target.matches('.edit')) {
    console.log(e)
    editTask(e)
  } else if(e.target.matches('.delete')) {
    console.log(e)
    deleteTask(e)
  }
}

const editTask = e => {
  popup.style.display = 'flex'
  popupInput = document.querySelector('.popup-input')
  popupError = document.querySelector('.popup-info')
  btnAccept = document.querySelector('.popup-btn.accept')
  btnCancel = document.querySelector('.popup-btn.cancel')
  // let newEditedTask
  toDoToEdit = e.target.closest('li')
  popupInput.value = toDoToEdit.firstChild.textContent

  

  // const editLi = () => {
  //   toDoToEdit.firstChild.textContent = popupInput.value
  // }

  const accept = () => {
    if (!!popupInput.value) {
    toDoToEdit.firstChild.textContent = popupInput.value
    popup.style.display = 'none'
    } else {
      popupError.textContent = 'Musisz podać jakąś treść!'
    }
  }
  const cancel = () => {
    popup.style.display = 'none'
  }

  btnAccept.addEventListener('click', accept)
  btnCancel.addEventListener('click', cancel)

}

  const deleteTask = e => {
    e.target.closest('li').remove()
    liList = document.getElementsByTagName('li')
    if (liList.length == 0) {
      error.textContent = 'Brak zadań na liście!'
      }
  }
const enterCheck = e => {
  if (e.key === 'Enter')
  add()
}

input.addEventListener('input', type)
btnAdd.addEventListener('click', add)
ul.addEventListener('click', checkClick)
input.addEventListener('keyup', enterCheck)

