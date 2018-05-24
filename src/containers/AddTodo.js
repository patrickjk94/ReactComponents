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
        <div style={{overflow: "hidden"}}>
          <input type="submit" style={{float: "right", width: "25%  ", height:"50%", margin: "0"}}  value="Add Todo"/> 
          <input type="text" ref={node => input = node} style={{width: "74%", marginRight:".5em", margin:"0"}} />
        </div>​

      </form>
    </div>
  )
}

export default connect()(AddTodo)
