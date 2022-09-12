export function ToDo(array) {

    return  {
        'name': array[0],
        'description': array[1],
        'dueDate': array[2],
        'priority': array[3],
        del(todo)   {
            todo.parentNode.removeChild(todo)
        }
    }
}