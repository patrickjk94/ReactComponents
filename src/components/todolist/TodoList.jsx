import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { ListGroup } from 'react-bootstrap'; 

const TodoList = ({ todos, toggleTodo }) => (
  <ListGroup className="todolist-list">
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ListGroup>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
