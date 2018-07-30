import React, { Component, Fragment } from 'react';
import MyTable from '../components/table/MyTable'; 
import '../App.css';
import logo from '../logo.svg';
import MyTableContainer from '../components/table/containers/MyTableContainer';
import TodoListComponent from '../components/todo-list/TodoListComponent';

import './TodoPage.css'; 
import TodoListContainer from '../components/todo-list/containers/TodoListContainer';

export default class TablePage extends Component {
  render() {
    return (
      <div className="my_table_wrapper"> 
        <MyTableContainer/>
      </div> 
    )
  }
}