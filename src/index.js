import './style.css'
import {ToDo, Project, Schedule, TODAY, WEEK, MONTH} from './objects.js'
import {CreateToDoItem, ClearList, Selected, CreateProject, ProjectNotes} from './DOM.js'
import {bgModalWindow} from './background.js'
import {Store} from './storage.js'

const newToDo = document.querySelector('#addNewToDo')
const createModal = document.querySelector('.modal')
const createToDo = document.querySelector('#createToDo')
const formToDo = document.querySelector('#formToDo')
const editModal = document.querySelector('#editModal')
const list = document.querySelector('#newToDo')
const allList = document.querySelector('#all')
const todayList = document.querySelector('#today')
const weekList = document.querySelector('#week')
const monthList = document.querySelector('#month')
const newProject = document.querySelector('#addProject')
const projectModal = document.querySelector('#projectModal')
const createProject = document.querySelector('#newProject')
const formProject = document.querySelector('#formProject')
const projectList = document.querySelector('#newProjects')
const listHeader = document.querySelector('#list-header')
const page = document.querySelector('#list')
const close = document.querySelectorAll('.close')

const todoName = document.querySelector('#createToDoName')
const todoDate = document.querySelector('#createToDoDate')
const projectName = document.querySelector('#projectName')



//bgModalWindow() // add index card styling to modal windows, called from background.js


/////////////////  Storage API retrieval on page load //////////////////////

//localStorage.clear()
let storedData = Initialize()

export const ALL = storedData[0] //InitializeDefaultList() // Initalize the ALL default list
if(!localStorage.getItem('ALL')) localStorage.setItem('ALL', JSON.stringify(ALL))

export const PROJECTS = storedData[1] //InitializeProjectsList()
if(!localStorage.getItem('PROJECTS')) localStorage.setItem('PROJECTS', JSON.stringify(PROJECTS))

InitializeProjectsList()


// Activate form modal for user to add a new to-do
newToDo.addEventListener('click', () => {
    createModal.style.display = 'flex'
})

// Closes modal then captures user input and creates a new to-do object along with it's DOM representation.  Also stores newly created object in local storage element 'ALL'
createToDo.addEventListener('click', () => {
    let todo = Object.values(formToDo.elements).map(x => x.type == 'checkbox' ? x.checked : x.value)

    if(!todo[0]) {
        ErrorMsg(todoName, 'Please enter a name for the task')
        return
    }
    
    if(!todo[2]) {
        ErrorMsg(todoDate, 'Enter a due date')
        return
    }    
    

    createModal.style.display = 'none'
    let todoObj = ToDo(todo)
    todoObj.id = Math.floor(Math.random() * 100000)  // Unique ID created for each to-do to help with storage retrieval and 'edit' and 'delete' functionality after page reload
    // if custom project selected, add to that list as well
    PROJECTS.forEach(project =>     {
        if (project.selected == true)   {
            project.tasks.push(todoObj)
            todoObj.color = project.color // create and set a new property 'color' for the object, match it to the projects color
            localStorage.setItem('PROJECTS', JSON.stringify(PROJECTS))
        } 
    })
    ALL.push(todoObj)       // push new to-do to default ALL list
    
    Store('ALL', todoObj)   // store newly created object in localStorage
    
    let ele = CreateToDoItem(todoObj)
    Schedule(todoObj)       // call Schedule from objects.js, will add new to-do into due-date lists
    list.appendChild(ele)
    
    formToDo.reset()        // reset input fields in the form for next use
})

page.addEventListener('transitionend', () => page.classList.remove('next-page'))

// Displays all to-do's in the default list ALL
allList.addEventListener('click',() => {
    page.classList.add('next-page')
    setTimeout(function ()   {
        listHeader.textContent = `All To-Dos`
        ClearList(list)
        Selected(allList)
        PROJECTS.forEach(project => project.selected = false)
        ALL.forEach(obj => {
            let ele = CreateToDoItem(obj)
            list.appendChild(ele)
        })
        //page.classList.toggle('next-page')
    }, 300)
})

// Displays all to-do's in the default list TODAY
todayList.addEventListener('click', () => {
    page.classList.add('next-page')
    setTimeout(function ()  {
        listHeader.textContent = `Today's To-Dos`
        ClearList(list)
        Selected(todayList)
        PROJECTS.forEach(project => project.selected = false)
        TODAY.forEach(obj => {
            let ele = CreateToDoItem(obj)
            list.appendChild(ele)
        })
    }, 300)
})

// Displays all to-do's in the default list THIS WEEK
weekList.addEventListener('click', () => {
    page.classList.add('next-page')
    setTimeout(function ()  {
        listHeader.textContent = `This Week's To-Dos`
        ClearList(list)
        Selected(weekList)
        PROJECTS.forEach(project => project.selected = false)
        WEEK.forEach(obj => {
            let ele = CreateToDoItem(obj)
            list.appendChild(ele)
        })
    }, 300)
})

// Displays all to-do's in the default list THIS MONTH
monthList.addEventListener('click', () => {
    page.classList.add('next-page')
    setTimeout(function ()  {
        listHeader.textContent = `This Month's To-Dos`
        ClearList(list)
        Selected(monthList)
        PROJECTS.forEach(project => project.selected = false)
        MONTH.forEach(obj => {
            let ele = CreateToDoItem(obj)
            list.appendChild(ele)
        })
    }, 300)
})

// Activate project form modal for user to create a new project
newProject.addEventListener('click', () => {
    projectModal.style.display = 'flex'
})

// Closes new project modal then captures user input and creates a new project object along with it's DOM representation
createProject.addEventListener('click', () =>  {
    let project = Object.values(formProject.elements).map(x => x.value)
    
    if (!project[0])    {
        ErrorMsg(projectName, 'Choose a name for the project')
        return
    }

    projectModal.style.display = 'none'
    let projectObj = new Project(project),
        ele = CreateProject(projectObj)
    projectList.appendChild(ele)
    PROJECTS.push(projectObj)
    Store('PROJECTS', projectObj)
    // event listener added to the project DOM element to be a 'clickable' list to where the user can add new to-dos and switch between the default lists and 
    // any other projects the user creates
    ele.addEventListener('click', () => {
        page.classList.add('next-page')
        setTimeout(function() {
            listHeader.textContent = `${projectObj.name}'s To-Dos`
            ClearList(list)
            Selected(ele.lastChild)
            PROJECTS.forEach(project => project.selected = false)
            projectObj.selected = true
            projectObj.tasks.forEach(obj => {
                let todo = CreateToDoItem(obj)
                list.appendChild(todo)
            })
            let notes = ProjectNotes(projectObj)
            list.appendChild(notes)
        }, 300)
    })
    formProject.reset()
})

// Functionality for close 'X' on the modal pop-up windows on each of the forms.  Also deletes left over error messages
close.forEach(x => {
    x.addEventListener('click', () => {
        createModal.style.display = 'none'
        projectModal.style.display = 'none'
        editModal.style.display = 'none'
        
        if (todoName.childElementCount > 2) todoName.removeChild(todoName.lastChild)
        if (todoDate.childElementCount > 2) todoDate.removeChild(todoDate.lastChild)
        if (projectName.childElementCount > 2) projectName.removeChild(projectName.lastChild)

        formToDo.reset()
        formProject.reset()
    })
})

function InitializeProjectsList()   {
    let data = PROJECTS
    data.forEach(project => {
        let projectDiv = CreateProject(project)
        projectList.appendChild(projectDiv)
        projectDiv.addEventListener('click', () => {
            page.classList.add('next-page')
            setTimeout(function()   {
                console.log(project)
                listHeader.textContent = `${project.name}'s To-Dos`
                ClearList(list)
                Selected(projectDiv.lastChild)
                PROJECTS.forEach(project => project.selected = false)
                project.selected = true
                project.tasks.forEach(task =>   {
                    let todoDiv = CreateToDoItem(task)
                    list.appendChild(todoDiv)
                })
                let notes = ProjectNotes(project)
                list.appendChild(notes)
            }, 300)
        })
    })
}

function Initialize()    {
    if( localStorage.getItem('ALL') )   {
        let dataAll = JSON.parse(localStorage.getItem('ALL') || [])
        let dataProjects = JSON.parse(localStorage.getItem('PROJECTS') || [])

        for (let a = 0; a < dataAll.length; a++)    {

            dataProjects.forEach(project => {
                for (let i = 0; i < project.tasks.length; i++)  {
                    if (dataAll[a].id == project.tasks[i].id) {
                        let array = Object.values(dataAll[a]),
                            todoObj = ToDo(array)
                            todoObj.color = dataAll[a].color
                            todoObj.id = dataAll[a].id
                            todoObj.completed = dataAll[a].completed
                            dataAll[a] = todoObj
                            project.tasks[i] = todoObj
                            break
                    }
                }

            })
            let array = Object.values(dataAll[a]),
                todoObj = ToDo(array)
                todoObj.color = dataAll[a].color
                todoObj.id = dataAll[a].id
                todoObj.completed = dataAll[a].completed
                dataAll[a] = todoObj
                let ele = CreateToDoItem(todoObj)
                Schedule(todoObj)
                list.appendChild(ele)
        }
        
        return [dataAll, dataProjects]
    }
    return [[], []]
}

// function that detects either missing name or date from newly created todo's and projects.  Creates pop error messages
export function ErrorMsg(node, msg) {
    if (node.childElementCount > 2) {
        node.lastChild.classList.add('shake')
        setTimeout(() => {
            node.lastChild.classList.remove('shake')
        }, 260)
        return
    }
    else {
        let popup = document.createElement('div')
        popup.classList.add('name-error')
        popup.textContent = msg

        if(node == todoDate) {
            popup.style.left = '25px'
            popup.style.top = '-30px'
        }

        node.appendChild(popup)
        node.onclick = () => {
            node.removeChild(popup)
            node.onclick = null
        }
    }
    return
}