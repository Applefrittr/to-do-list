import { ALL, PROJECTS } from "./index.js"

const modal = document.querySelector('#editModal')
const form = document.querySelector('#formEditToDo')
const edit = document.querySelector('#editToDo')

// To-Do items are represented as objects.  Lists will be arrays which contain the To-Do objects

export const TODAY = [] // List that contiains to-do objects due today, this week, and this month
export const WEEK = []
export const MONTH = []



// to-do factory function, 5 attributes and 2 methods.  Parameter 'array' passed is a collection of the values pulled from input form createToDo provided by user
export function ToDo(array) {


    return  {
        'name': array[0],
        'description': array[1],
        'dueDate': array[2],
        'priority': array[3],
        'completed': false,
        del(todo)   {
            todo.parentNode.removeChild(todo)

            let id = this.id
            for (let a = 0; a < ALL.length; a++)    {
                if (ALL[a].id == id)    {
                    ALL.splice(a, 1)
                    break
                }
            }

            for (let b = 0; b < PROJECTS.length; b++) {
                for (let c = 0; c < PROJECTS[b].tasks.length; c++ )   {
                    if (PROJECTS[b].tasks[c].id == id)  {
                        PROJECTS[b].tasks.splice(c, 1)
                        break
                    }
                }
            }
            localStorage.setItem('ALL', JSON.stringify(ALL))
            localStorage.setItem('PROJECTS', JSON.stringify(PROJECTS))
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
                //console.log(this, {ALL}, {PROJECTS})
                this.name = form.elements[0].value
                this.description = form.elements[1].value
                this.dueDate = form.elements[2].value
                this.priority = form.elements[3].checked
                modal.style.display = 'none'
                
                let id = this.id
                for (let a = 0; a < ALL.length; a++)    {
                    if (ALL[a].id == id)    {
                        ALL[a] = this
                        break
                    }
                }
                for (let b = 0; b < PROJECTS.length; b++) {
                    for (let c = 0; c < PROJECTS[b].tasks.length; c++ )   {
                        if (PROJECTS[b].tasks[c].id == id)  {
                            PROJECTS[b].tasks[c] = this
                            break
                        }
                    }
                }
                Schedule(this)
                localStorage.setItem('ALL', JSON.stringify(ALL))
                localStorage.setItem('PROJECTS', JSON.stringify(PROJECTS))

            }
            return this
        }
    }
}

// Project class.  An Object w/ 'name' and 'notes' elements, as well as a 'tasks' array, which holds that projects ToDo Objects.  The 'selected' boolean is used to push new ToDo's in the objects 'tasks' array
export class Project {
    constructor(array) {
        this.name = array[0]
        this.notes = array[1]
        this.color = array[2]
        this.tasks = []
        this.selected = false
    }
}


// This function organizes the param To-Do obj into the correct due-date list
export function Schedule(obj)  {
    let today = new Date(),
        due = new Date(obj.dueDate)
    if (due.getDate() + 1 == today.getDate()) TODAY.push(obj)
    if (due.getMonth() == today.getMonth()) MONTH.push(obj)
    let week = today.setDate(today.getDate() + 7)
    if (due <= week) WEEK.push(obj)
    
}