import {ALL} from './objects.js'

const editBtn = document.querySelector('#editToDo')

// DOM created element which represents a to-do object.  Edit and Delete buttons call methods repsectively from the to-do object itself and update DOM accordingly
export function CreateToDoItem(obj) {
    let newItem = document.createElement('div')
    newItem.classList.add('todo')

    let box1 = document.createElement('div')
    box1.classList.add('todobox')

    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    if (obj.completed) {
        checkbox.checked = true
        newItem.classList.add('complete')
    }

    checkbox.addEventListener('click', () => {
        newItem.classList.toggle('complete')
        obj.completed = !obj.completed
    })

    let newItemName = document.createElement('p')
    newItemName.textContent = obj.name

    box1.appendChild(checkbox)
    box1.appendChild(newItemName)

    let box2 = document.createElement('div')
    box2.classList.add('todobox')

    let newItemDate = document.createElement('p')
    newItemDate.textContent = obj.dueDate

    let edit = document.createElement('button')
    edit.textContent = 'Edit'
    
    edit.addEventListener('click', () => {
        let update = obj.edit()
        editBtn.addEventListener('click', () => {
            newItemName.textContent = update.name
            newItemDate.textContent = update.dueDate
        })
    })
    
    let del = document.createElement('button')
    del.textContent = 'Delete'
    del.addEventListener('click', () => obj.del(newItem))

    box2.appendChild(newItemDate)
    box2.appendChild(edit)
    box2.appendChild(del)

    let descptPreview = document.createElement('div')
    descptPreview.textContent = obj.description.slice(0, 30) + '...'
    
    newItem.appendChild(box1)
    newItem.appendChild(descptPreview)
    newItem.appendChild(box2)

    return newItem
}

export function ClearList(element)  {
    while(element.lastChild)   {
        element.removeChild(element.lastChild)
    }
}

export function Selected(list)  {
    let notSelected = document.querySelector('.selected')
    notSelected.classList.remove('selected')
    list.classList.add('selected')
}
