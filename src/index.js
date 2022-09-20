import './style.css'
import {ToDo, Project, Schedule, ALL, TODAY, WEEK, MONTH, PROJECTS } from './objects.js'
import {CreateToDoItem, ClearList, Selected, CreateProject} from './DOM.js'
import {bgModalWindow} from './background.js'

const newToDo = document.querySelector('#addNewToDo')
const createModal = document.querySelector('.modal')
const createToDo = document.querySelector('#createToDo')
const formToDo = document.querySelector('#formToDo')
const list = document.querySelector('#newToDo')
const allList = document.querySelector('#all')
const todayList = document.querySelector('#today')
const weekList = document.querySelector('#week')
const monthList = document.querySelector('#month')
const newProject = document.querySelector('#addProject')
const projectModal = document.querySelector('#projectModal')
const createProject = document.querySelector('#newProject')
const formProject = document.querySelector('#formProject')
const projects = document.querySelector('#newProjects')

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
    PROJECTS.forEach(project => project.selected == true ? project.tasks.push(todoObj) : '') // if custom project selected, add to that list as well
    Schedule(todoObj)       // call Schedule from objects.js, will add new to-do into due-date lists
    list.appendChild(ele)
    
    formToDo.reset()
    console.log(ALL,TODAY, WEEK, MONTH)
})

allList.addEventListener('click',() => {
    ClearList(list)
    Selected(allList)
    PROJECTS.forEach(project => project.selected = false)
    ALL.forEach(obj => {
        let ele = CreateToDoItem(obj)
        list.appendChild(ele)
    })
})

todayList.addEventListener('click', () => {
    ClearList(list)
    Selected(todayList)
    PROJECTS.forEach(project => project.selected = false)
    TODAY.forEach(obj => {
        let ele = CreateToDoItem(obj)
        list.appendChild(ele)
    })
})

weekList.addEventListener('click', () => {
    ClearList(list)
    Selected(weekList)
    PROJECTS.forEach(project => project.selected = false)
    WEEK.forEach(obj => {
        let ele = CreateToDoItem(obj)
        list.appendChild(ele)
    })
})

monthList.addEventListener('click', () => {
    ClearList(list)
    Selected(monthList)
    PROJECTS.forEach(project => project.selected = false)
    MONTH.forEach(obj => {
        let ele = CreateToDoItem(obj)
        list.appendChild(ele)
    })
})

newProject.addEventListener('click', () => {
    projectModal.style.display = 'flex'
})

createProject.addEventListener('click', () =>  {
    projectModal.style.display = 'none'
    let project = Object.values(formProject.elements).map(x => x.value),
        projectObj = new Project(project),
        ele = CreateProject(projectObj)
    projects.appendChild(ele)
    ele.addEventListener('click', () => {
        ClearList(list)
        Selected(ele)
        PROJECTS.forEach(project => project.selected = false)
        projectObj.selected = true
        projectObj.tasks.forEach(obj => {
            let todo = CreateToDoItem(obj)
            list.appendChild(todo)
        })
    })
    formProject.reset()
    console.log(PROJECTS)
})