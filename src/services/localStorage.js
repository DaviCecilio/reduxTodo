export function GetLocalTasks() {
  try {
    const result = localStorage.getItem('@todoredux/tasks')
    return result
  } catch (error) {
    return 'Error'
  }
}

export function PutLocalTasks(id, item) {
  try {
    var data = []
    data = JSON.parse(GetLocalTasks()) ?? []
    data.push({ id: id, text: item })
    localStorage.setItem('@todoredux/tasks', JSON.stringify(data))
    return
  } catch (error) {
    return 'Error'
  }
}

export function RemoveLocalTasks(id) {
  try {
    var items = JSON.parse(GetLocalTasks())
    const result = items.filter((item) => item.id !== id)
    localStorage.setItem('@todoredux/tasks', JSON.stringify(result))
    return
  } catch (error) {
    return 'Error'
  }
}
