import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { ListGroup } from 'react-bootstrap'; 


export default class TodoList extends React.Component { 

  // Render the list of todo items 
  render() {
    return(
      <ListGroup className="todolist-list">
      {this.props.todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => this.props.toggleTodo(todo.id)}
          deleteTodo={() => this.props.deleteTodo(todo.id)}
        />
      )}
    </ListGroup>  
    )
  }
  
}

//props requirements
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