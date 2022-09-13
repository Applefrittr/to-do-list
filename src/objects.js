const modal = document.querySelector('#editModal')
const form = document.querySelector('#formEditToDo')
const edit = document.querySelector('#editToDo')


export const ALL = [] // List that will contain ALL to-dos


// to-do factory function, 4 attributes and 2 methods.  Parameter 'array' passed is a collection of the values pulled from input form createToDo provided by user
export function ToDo(array) {

    return  {
        'name': array[0],
        'description': array[1],
        'dueDate': array[2],
        'priority': array[3],
        del(todo)   {
            todo.parentNode.removeChild(todo)
            let remove = ALL.indexOf(todo)
            ALL.splice(remove - 1,1)
        },
        edit()  {
            modal.style.display ='flex'
            form.elements[0].value = this.name
            form.elements[1].value = this.description
            form.elements[2].value = this.dueDate
            form.elements[3].checked = this.priority

            // onclick used over eventlistener since we use the same edit button to modify all to-do objects.  Onclick updates the edit button's 'onclick' property
            // each time it is clicked, tying it to the current to-do obj for modification.  Eventlisteners would have linked all objects together and edits would 
            // happen to several objects at once.
            edit.onclick = () => {
                this.name = form.elements[0].value
                this.description = form.elements[1].value
                this.dueDate = form.elements[2].value
                this.priority = form.elements[3].checked
                modal.style.display = 'none'
            }

            return this
        }
    }
}
