import React, { Component } from 'react';
import TodoListComponent from "../components/todo-list/TodoListComponent"; 

export default class TodoPage extends Component {
  render() {
    return (
      <div className="todo-page-todo-container"> 
        <TodoListComponent/> 
      </div> 
      );
  }
}