const createToDo = document.querySelector('#createToDoWindow')
const editToDo = document.querySelector('#editToDoWindow')

export function bgModalWindow()   {
    for (let a = 0; a < 8; a++) {
        let row1 = document.createElement('div')
        let row2 = document.createElement('div')
        let x = [row1, row2]
        createToDo.appendChild(row1)
        editToDo.appendChild(row2)
        a == 0 ? x.forEach(row => row.style['border-bottom'] = 'solid red 1px') : x.forEach(row => row.style['border-bottom'] = 'solid blue 1px')
    }
}