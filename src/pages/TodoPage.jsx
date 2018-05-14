import React, { Component } from 'react';
import MyTable from '../components/MyTable'; 
import '../App.css';
import logo from '../logo.svg';
import AddTodo from "../containers/AddTodo"; 
import VisibleTodoList from '../containers/VisibleTodoList'; 
import Footer from "../components/todo-components/Footer";
import TodoListComponent from "../components/todo-components/TodoListComponent"; 

class Page1 extends Component {
  render() {
    return (
      <TodoListComponent/> 
      );
  }
}

export default Page1;