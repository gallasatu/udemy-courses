const add = document.querySelector('.add')
const deleteAll = document.querySelector('.delete-all')
const notePanel = document.querySelector('.note-panel')
let deleteNote
const noteArea = document.querySelector('.note-area')
const note = document.querySelector('.note')
let number = 0
let noteHeader
let h3
let deleteX
let noteBody


const showPanel = () => {
  notePanel.style.display = 'block'

  const category = document.querySelector('#category')
  const text = document.querySelector('#text')
  const error = document.querySelector('.error')
  const save = document.querySelector('.save')
  const cancel = document.querySelector('.cancel')
  error.style.visibility = 'hidden'

  const createNote = () => {
    number++
    const newNote = document.createElement('div')
    newNote.classList.add('note')

    if (category.value == 1) {
      newNote.style.backgroundColor = 'lightgreen'
    } else if (category.value == 3) {
      newNote.style.backgroundColor = 'lightblue'
    }
    noteArea.appendChild(newNote)
    noteHeader = document.createElement('div')
    noteHeader.classList.add('note-header')
    h3 = document.createElement('h3')
    h3.classList.add('note-title')
    h3.textContent = `Notatka #${number}`
    noteHeader.appendChild(h3)
    deleteX = document.createElement('button')
    deleteX.classList.add('delete-note')
    deleteX.innerHTML = '<i class="fas fa-times icon"></i>'
    noteHeader.appendChild(deleteX)
    newNote.appendChild(noteHeader)
    noteBody = document.createElement('div')
    noteBody.classList.add('note-body')
    noteBody.textContent = text.value
    newNote.appendChild(noteBody)
    deleteX.addEventListener('click', () => newNote.remove())
    
      
  }

  const saveNote = () => {
    if (category.value == 0 || text.value == '') {
      error.style.visibility = 'visible'
    } else {
      error.style.visibility = 'hidden'
      
      
      createNote()

      notePanel.style.display = 'none'
      category.value = 0
      text.value = ''
      
    }
  }

  const cancelNote = () => {
    notePanel.style.display = 'none'
  }

  save.addEventListener('click', saveNote)
  cancel.addEventListener('click', cancelNote)
}

const removeAll = () => {
  noteArea.innerHTML = ''
  number = 0
}

add.addEventListener('click', showPanel)
deleteAll.addEventListener('click', removeAll)
