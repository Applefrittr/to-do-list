import './style.css'
import {ToDo, Schedule, ALL, TODAY, WEEK, MONTH } from './objects.js'
import {CreateToDoItem, ClearList, Selected} from './DOM.js'
import {bgModalWindow} from './background.js'

const newToDo = document.querySelector('#addNewToDo')
const createModal = document.querySelector('.modal')
const createToDo = document.querySelector('#createToDo')
const formToDo = document.querySelector('#formToDo')
const list = document.querySelector('#newToDo')
//const test = document.querySelector('.test')
const allList = document.querySelector('#all')
const todayList = document.querySelector('#today')
const weekList = document.querySelector('#week')
const monthList = document.querySelector('#month')

bgModalWindow() // add index card styling to modal windows, called from background.js

// Activate form modal for user to add a new to-do
newToDo.addEventListener('click', () => {
    createModal.style.display = 'flex'
})

// Closes modal then captures user input and creates a new to-do object along with it's DOM representation
createToDo.addEventListener('click', () => {
    createModal.style.display = 'none'
    let todo = Object.values(formToDo.elements).map(x => x.type == 'checkbox' ? x.checked : x.value),
        todoObj = ToDo(todo),
        ele = CreateToDoItem(todoObj)
    ALL.push(todoObj)       // push new to-do to default ALL list
    Schedule(todoObj)       // call Schedule from objects.js, will add new to-do into due-date lists
    list.appendChild(ele)
    
    formToDo.reset()
    console.log(ALL,TODAY)
})

// test.addEventListener('click', () => {
//     while(list.lastChild)   {
//         list.removeChild(list.lastChild)
//     }
// })

allList.addEventListener('click',() => {
    ClearList(list)
    Selected(allList)
    ALL.forEach(obj => {
        let ele = CreateToDoItem(obj)
        list.appendChild(ele)
    })
})

todayList.addEventListener('click', () => {
    ClearList(list)
    Selected(todayList)
    weekList
    TODAY.forEach(obj => {
        let ele = CreateToDoItem(obj)
        list.appendChild(ele)
    })
})

weekList.addEventListener('click', () => {
    ClearList(list)
    Selected(weekList)
    WEEK.forEach(obj => {
        let ele = CreateToDoItem(obj)
        list.appendChild(ele)
    })
})

monthList.addEventListener('click', () => {
    ClearList(list)
    Selected(monthList)
    MONTH.forEach(obj => {
        let ele = CreateToDoItem(obj)
        list.appendChild(ele)
    })
})



// console.log(ALL)
// let a = new Date()
// let b = new Date(a.getFullYear(), a.getMonth(), a.getDate() + 7)
// console.log(a)
// console.log(b)
// let y = new Date("2022-09-16")
// console.log(y)