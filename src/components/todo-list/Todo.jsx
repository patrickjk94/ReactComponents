import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem, Button} from 'react-bootstrap'

const Todo = ({ onClick, completed, text }) => (
  <ListGroupItem className="todo_element"
    onClick={onClick}
    style={ { textDecoration: completed ? 'line-through' : 'none'} }
  >
    {text}
    <Button bsStyle="link"  style={{float: "right", height: "2.0em"}}><i className="fas fa-minus-circle"></i></Button>  </ListGroupItem>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo