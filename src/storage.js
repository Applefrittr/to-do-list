export function Store(name, obj)    {
    let data = JSON.parse(localStorage.getItem(name))
    data.push(obj)
    localStorage.setItem(name, JSON.stringify(data))
}