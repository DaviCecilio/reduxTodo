import React from 'react'
import t from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as TodoAction from '../../store/actions/todos'

const TodoList = ({ todos, addTodo, removeTodo }) => {
  return (
    <div>
      <ul>
        {todos.map((i) => (
          <li key={i.id}>
            {i.text}
            <button type="button" className="btnRemove" onClick={() => removeTodo(i.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className="btnAdd" onClick={() => addTodo('Novo Todo')}>
        Adicionar
      </button>
    </div>
  )
}

TodoList.defaultProps = {
  todos: {
    id: null,
    text: '',
  },
}

TodoList.propTypes = {
  removeTodo: t.func.isRequired,
  addTodo: t.func.isRequired,
  todos: t.arrayOf(
    t.shape({
      id: t.number,
      text: t.string.isRequired,
    }),
  ),
}

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapDispatchToProps = (dispatch) => bindActionCreators(TodoAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
