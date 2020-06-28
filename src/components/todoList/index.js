import React, { useState } from 'react'
import uuid from 'uuid/dist/v4'
import t from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import { withStyles } from '@material-ui/core/styles'

import { MdExpandLess, MdExpandMore, MdPlaylistAdd, MdDelete, MdInfoOutline } from 'react-icons/md'

import * as TodoAction from '../../store/actions/todos'
import { PutLocalTasks, RemoveLocalTasks } from '../../services/localStorage'
import { TodoStyles, FormTodo } from './styles'

const StyledIcons = withStyles({
  root: {
    display: 'block',
    textAlign: 'right',
  },
})(ListItemIcon)

const TodoList = ({ todos, addTodo, removeTodo }) => {
  const [toDo, setToDo] = useState(''),
    [openToDo, setOpenToDo] = useState(true)

  const handleClick = () => {
    setOpenToDo(!openToDo)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setToDo('')
    const newId = uuid()
    addTodo(newId, toDo)
    PutLocalTasks(newId, toDo)
  }

  function handleDelete(id) {
    RemoveLocalTasks(id)
    removeTodo(id)
  }
  return (
    <TodoStyles>
      <FormTodo onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Write an To Do"
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
        />
        <button type="submit" className="btnAdd">
          Add
        </button>
      </FormTodo>

      <List
        className="font-white"
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" color="inherit" id="nested-list-subheader">
            Click on item to execute an action
          </ListSubheader>
        }
      >
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <MdPlaylistAdd className="iconList fontWhite" />
          </ListItemIcon>
          <ListItemText primary="ToDo" />
          {openToDo ? <MdExpandLess className="iconList" /> : <MdExpandMore className="iconList" />}
        </ListItem>

        <Collapse in={openToDo} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {todos && todos.length > 0 ? (
              todos.map((i) => (
                <ListItem key={i.id} alignItems={'flex-start'}>
                  <ListItemText key={i.id} primary={`${i.text}`} />
                  <StyledIcons>
                    <MdDelete onClick={() => handleDelete(i.id)} className="iconList fontDanger" />
                  </StyledIcons>
                </ListItem>
              ))
            ) : (
              <div className="emptyToDo">
                <MdInfoOutline />
                <p>empty</p>
              </div>
            )}
          </List>
        </Collapse>
      </List>
    </TodoStyles>
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
      id: t.string,
      text: t.string.isRequired,
    }),
  ),
}

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapDispatchToProps = (dispatch) => bindActionCreators(TodoAction, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
