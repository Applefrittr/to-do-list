import './style.css'
import {ToDo, Project, Schedule, TODAY, WEEK, MONTH, PROJECTS} from './objects.js'
import {CreateToDoItem, ClearList, Selected, CreateProject} from './DOM.js'
import {bgModalWindow} from './background.js'
import {Store} from './storage.js'

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
const listHeader = document.querySelector('#list-header')



bgModalWindow() // add index card styling to modal windows, called from background.js


/////////////////  Storage API retrieval on page load //////////////////////

//localStorage.clear()
export const ALL = InitializeDefaultList() // Initalize the ALL default list
if(!localStorage.getItem('ALL')) localStorage.setItem('ALL', JSON.stringify(ALL))



// Activate form modal for user to add a new to-do
newToDo.addEventListener('click', () => {
    createModal.style.display = 'flex'
})

// Closes modal then captures user input and creates a new to-do object along with it's DOM representation.  Also stores newly created object in local storage element 'ALL'
createToDo.addEventListener('click', () => {
    createModal.style.display = 'none'
    let todo = Object.values(formToDo.elements).map(x => x.type == 'checkbox' ? x.checked : x.value),
        todoObj = ToDo(todo)
    ALL.push(todoObj)       // push new to-do to default ALL list
    Store('ALL', todoObj)   // store newly created object in localStorage
    // if custom project selected, add to that list as well
    PROJECTS.forEach(project =>     {
        if (project.selected == true)   {
            project.tasks.push(todoObj)
            //ele = CreateToDoItem(todoObj, project)
            todoObj.color = project.color
        } 
    })
    let ele = CreateToDoItem(todoObj)
    Schedule(todoObj)       // call Schedule from objects.js, will add new to-do into due-date lists
    list.appendChild(ele)
    
    formToDo.reset()        // reset input fields in the form for next use
})

// Displays all to-do's in the default list ALL
allList.addEventListener('click',() => {
    listHeader.textContent = `All To-Dos`
    ClearList(list)
    Selected(allList)
    PROJECTS.forEach(project => project.selected = false)
    ALL.forEach(obj => {
        let ele = CreateToDoItem(obj)
        list.appendChild(ele)
    })
})

// Displays all to-do's in the default list TODAY
todayList.addEventListener('click', () => {
    listHeader.textContent = `Today's To-Dos`
    ClearList(list)
    Selected(todayList)
    PROJECTS.forEach(project => project.selected = false)
    TODAY.forEach(obj => {
        let ele = CreateToDoItem(obj)
        list.appendChild(ele)
    })
})

// Displays all to-do's in the default list THIS WEEK
weekList.addEventListener('click', () => {
    listHeader.textContent = `This Week's To-Dos`
    ClearList(list)
    Selected(weekList)
    PROJECTS.forEach(project => project.selected = false)
    WEEK.forEach(obj => {
        let ele = CreateToDoItem(obj)
        list.appendChild(ele)
    })
})

// Displays all to-do's in the default list THIS MONTH
monthList.addEventListener('click', () => {
    listHeader.textContent = `This Month's To-Dos`
    ClearList(list)
    Selected(monthList)
    PROJECTS.forEach(project => project.selected = false)
    MONTH.forEach(obj => {
        let ele = CreateToDoItem(obj)
        list.appendChild(ele)
    })
})

// Activate project form modal for user to create a new project
newProject.addEventListener('click', () => {
    projectModal.style.display = 'flex'
})

// Closes new project modal then captures user input and creates a new project object along with it's DOM representation
createProject.addEventListener('click', () =>  {
    projectModal.style.display = 'none'
    let project = Object.values(formProject.elements).map(x => x.value),
        projectObj = new Project(project),
        ele = CreateProject(projectObj)
    projects.appendChild(ele)
    // event listener added to the project DOM element to be a 'clickable' list to where the user can add new to-dos and switch between the default lists and 
    // any other projects the user creates
    ele.addEventListener('click', () => {
        listHeader.textContent = `${projectObj.name}'s To-Dos`
        ClearList(list)
        Selected(ele.lastChild)
        PROJECTS.forEach(project => project.selected = false)
        projectObj.selected = true
        projectObj.tasks.forEach(obj => {
            let todo = CreateToDoItem(obj)
            list.appendChild(todo)
        })
    })
    formProject.reset()
    console.log(projectObj)
})

export function InitializeDefaultList()    {
    let objArray = []
    if( localStorage.getItem('ALL') )   {
        let data = JSON.parse(localStorage.getItem('ALL') || [])
        // for each data object in stored array, create a ToDo object and it's DOM element as well as call Schedule to oraganize by due date arrays
        data.forEach(item => {
            let array = Object.values(item),
                obj = ToDo(array),
                ele = CreateToDoItem(obj)
            objArray.push(obj)
            Schedule(obj)
            list.appendChild(ele)
        })
    }
    return objArray
} 