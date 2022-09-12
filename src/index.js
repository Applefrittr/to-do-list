import './style.css'
import {ToDo} from './objects.js'
import {createToDoItem} from './DOM.js'

const newToDo = document.querySelector('#addNewToDo')
const modal = document.querySelector('.modal')
const createToDo = document.querySelector('#createToDo')
const formToDo = document.querySelector('#formToDo')
const list = document.querySelector('#newToDo')

newToDo.addEventListener('click', () => {
    modal.style.display = 'flex'
})

createToDo.addEventListener('click', () => {
    modal.style.display = 'none'
    //console.log(Object.values(formToDo.elements))
    //console.log(Object.values(formToDo.elements).map(x => x.type == 'checkbox' ? x.checked : x.value))
    let todo = Object.values(formToDo.elements).map(x => x.type == 'checkbox' ? x.checked : x.value)
    let todoObj = ToDo(todo)
    let ele = createToDoItem(todoObj)
    list.appendChild(ele)

    let del = document.querySelector('#del')
    del.addEventListener('click', () => todoObj.del(ele))
    formToDo.reset()
})