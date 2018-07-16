import React, { Component } from 'react';
import MyTable from '../components/table/MyTable'; 
import '../App.css';
import logo from '../logo.svg';
import MyTableContainer from '../components/table/containers/MyTableContainer';
import TodoListComponent from '../components/todo-list/TodoListComponent';

import './TodoPage.css'; 

export default class TablePage extends Component {
  render() {
    return (
      <MyTableContainer/>
    )
  }
}

