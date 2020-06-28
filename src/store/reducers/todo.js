import { GetLocalTasks } from '../../services/localStorage'

const INITIAL_STATE = JSON.parse(GetLocalTasks()) ?? []

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: action.payload.id, text: action.payload.text }]
    case 'REMOVE_TODO':
      return state.filter((filter) => filter.id !== action.payload.id)
    default:
      return state
  }
}
