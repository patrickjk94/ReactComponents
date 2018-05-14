import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { FormControl, Button, Form, FormGroup, Col, ControlLabel} from 'react-bootstrap'

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
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
        <input type="submit" style={{float: "right"}}  value="Add Todo"/> 
        <div style={{overflow: "hidden", paddingRight: ".5em"}}>
        <input type="text" ref={node => input = node} style={{width: "100%"}} />
        </div>​

      </form>
      <br/> 
    </div>
  )
}

export default connect()(AddTodo)
