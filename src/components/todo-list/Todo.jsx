import React from 'react'
import PropTypes from 'prop-types'
import { ListGroupItem } from 'react-bootstrap'; 

export default class Todo extends React.Component { 

  constructor() {
    super(); 
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  deleteTodo(evt) { 
    this.props.deleteTodo(evt.target.value); 
    evt.stopPropagation(); // This is so that the parent element isn't focused on click
  }


  render() {
    return (
      <React.Fragment> 
      <ListGroupItem
        onClick={this.props.onClick}
        style={ {
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}
      >
        {this.props.text}
        <button className="fa fa-trash" aria-hidden="true" onClick={this.deleteTodo} ></button> 
      </ListGroupItem>
      </React.Fragment>  
    )
  }
}