import uuid from 'uuid/dist/v4'

const INITIAL_STATE = [
  {
    id: uuid(),
    text: 'Fazer Café',
  },
  {
    id: uuid(),
    text: 'Fazer Dever',
  },
]

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: uuid(), text: action.payload.text }]
    case 'REMOVE_TODO':
      return state.filter((filter) => filter.id !== action.payload.id)
    default:
      return state
  }
}
