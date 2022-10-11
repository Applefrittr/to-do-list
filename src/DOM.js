import FLAG from './flag.png'
import {ALL, PROJECTS} from './index.js'

const editBtn = document.querySelector('#editToDo')

// DOM created element which represents a to-do object.  Edit and Delete buttons call methods repsectively from the to-do object itself and update DOM accordingly
export function CreateToDoItem(obj) {
    let newItem = document.createElement('div')
    newItem.classList.add('todo')

    obj.passDue() ? newItem.classList.add('pass-due') : newItem.classList.remove('pass-due')

    let box1 = document.createElement('div')
    box1.classList.add('todobox')

    let flag = document.createElement('img')
    flag.classList.add('flag')
    if (obj.priority) flag.classList.add('flagged')
    flag.src = FLAG
    flag.style.height = '20px'
    flag.style.width = '20px'

    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    if (obj.completed) {
        checkbox.checked = true
        newItem.classList.add('complete')
    }

    checkbox.addEventListener('click', () => {
        newItem.classList.toggle('complete')
        obj.completed = !obj.completed

        let id = obj.id
        for (let a = 0; a < ALL.length; a++) {
            if (ALL[a].id == id) {
                ALL[a] = obj
                break
            }
        }

        for (let b = 0; b < PROJECTS.length; b++) {
            for (let c = 0; c < PROJECTS[b].tasks.length; c++ )   {
                if (PROJECTS[b].tasks[c].id == id)  {
                    PROJECTS[b].tasks[c] = obj
                    break
                }
            }
        }

        localStorage.setItem('ALL', JSON.stringify(ALL))
        localStorage.setItem('PROJECTS', JSON.stringify(PROJECTS))

    })

    let newItemName = document.createElement('p')
    newItemName.textContent = obj.name

    box1.appendChild(flag)
    box1.appendChild(checkbox)
    if (obj.color)    {
        let color = document.createElement('div')
        color.classList.add('todo-project-color')
        color.style.backgroundColor = obj.color
        box1.appendChild(color)
    }
    box1.appendChild(newItemName)

    let box2 = document.createElement('div')
    box2.classList.add('todobox')

    let newItemDate = document.createElement('p')
    let date = new Date(obj.dueDate).toDateString()
    newItemDate.textContent = date

    let descptPreview = document.createElement('div')
    descptPreview.textContent = obj.description.slice(0, 30) + '...'
    descptPreview.classList.add('descrpt')

    let descptPopup = document.createElement('div')
    descptPopup.textContent = obj.description
    descptPopup.classList.add('popup')
    descptPreview.addEventListener('mousemove', () => {
        descptPopup.style.left = '20vw'
        descptPopup.style.top = '40px'
    })

    descptPreview.appendChild(descptPopup)

    let edit = document.createElement('button')
    edit.textContent = 'Edit'
    
    edit.addEventListener('click', () => {
        let update = obj.edit()
        editBtn.addEventListener('click', () => {
            newItemName.textContent = update.name
            descptPreview.textContent = update.description.slice(0, 30) + '...'
            newItemDate.textContent = update.dueDate
            update.priority ? flag.classList.add('flagged') : flag.classList.remove('flagged')
            let descptPopup = document.createElement('div')
            descptPopup.textContent = obj.description
            descptPopup.classList.add('popup')
            descptPreview.addEventListener('mousemove', () => {
                descptPopup.style.left = '20vw'
                descptPopup.style.top = '40px'
            })
            descptPreview.appendChild(descptPopup)
            console.log(update)
            update.passDue() ? newItem.classList.add('pass-due') : newItem.classList.remove('pass-due')

        })
    })

    descptPreview.appendChild(descptPopup)
    
    let del = document.createElement('button')
    del.textContent = 'Delete'
    del.onclick = () => obj.del(newItem)

    box2.appendChild(newItemDate)
    box2.appendChild(edit)
    box2.appendChild(del)
    
    newItem.appendChild(box1)
    newItem.appendChild(descptPreview)
    newItem.appendChild(box2)

    return newItem
}


// Project DOM element.  Used to represent the Project Objects created by the user and displayed on-screen
export function CreateProject(obj)    {
    let newProject = document.createElement('div')
    newProject.style.display = 'flex'

    let projectColor = document.createElement('div')
    projectColor.classList.add('project-color')
    projectColor.style['background-color'] = obj.color
    
    let projectName = document.createElement('h4')
    projectName.textContent = obj.name
    
    newProject.appendChild(projectColor)
    newProject.appendChild(projectName)

    return newProject
}

// Deletes the DOM to-do's displayed on-screen
export function ClearList(element)  {
    while(element.lastChild)   {
        element.removeChild(element.lastChild)
    }
}

// Add's the '>>>' to the current user selected list or project
export function Selected(list)  {
    let notSelected = document.querySelector('.selected')
    notSelected.classList.remove('selected')
    list.classList.add('selected')
}

// Creates a DOM element to display the project's notes.
export function ProjectNotes(obj)  {
    let container = document.createElement('div')
    container.classList.add('project-notes')

    let header = document.createElement('h2')
    header.textContent = 'Notes'

    let text = document.createElement('div')
    text.textContent = obj.notes
    text.classList.add('project-notes-text')

    container.appendChild(header)
    container.appendChild(text)

    return container
}