import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../../actions'
import { FormControl, Button, Form, FormGroup, Col, ControlLabel} from 'react-bootstrap'

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div >
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <div className="todo-list-header"> {/*className="add-todo-input"*/} 
          <input type="text" className="add-todo-input" ref={node => input = node} />
          <input type="submit" className="add-todo-button"  value="Add Todo" /> 
        </div>​

      </form>
    </div>
  )
}

export default connect()(AddTodo)
