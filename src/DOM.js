export function createToDoItem(obj) {
    let newItem = document.createElement('div')
    newItem.classList.add('todo')

    let newItemName = document.createElement('p')
    newItemName.textContent = obj.name

    let newItemDate = document.createElement('p')
    newItemDate.textContent = obj.dueDate

    let del = document.createElement('button')
    del.textContent = 'Delete'
    del.id = 'del'

    newItem.appendChild(newItemName)
    newItem.appendChild(newItemDate)
    newItem.appendChild(del)

    return newItem
}