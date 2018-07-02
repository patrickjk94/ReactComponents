import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem, Button} from 'react-bootstrap'
import { SortableElement, SortableContainer} from 'react-sortable-hoc';


const TodoItem = SortableElement(({value, todo, toggleValue, deleteValue}) =>
       // onClick={ onClick }
      // style={ { textDecoration: completed ? 'line-through' : 'none'} } 
  <ListGroupItem className="todo_element" style={ { textDecoration: todo.completed ? 'line-through' : 'none'} } > 
    <Button bsStyle="link" onClick={toggleValue} style={{float: "right", height: "2.0em"}}>
      <i className="fas fa-plus-circle"></i>
    </Button>  
    <span onClick="toggleValue"> {value} </span>  
    <Button bsStyle="link" onClick={deleteValue} style={{float: "right", height: "2.0em"}}>
      <i className="fas fa-minus-circle"></i>
    </Button>  
  </ListGroupItem> 
);

export default TodoItem; 
