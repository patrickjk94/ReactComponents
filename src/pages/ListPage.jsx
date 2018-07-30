import React, { Component } from 'react';
import LoginComponent from '../components/login/LoginComponent';
import './ListPage.css'; 
import MyTableContainer from '../components/table/containers/MyTableContainer';
import TodoListContainer from '../components/todo-list/containers/TodoListContainer';
import TodoList from '../components/todo-list/TodoList';
import TodoListComponent from '../components/todo-list/TodoListComponent';
import CardList from '../components/card-list/CardList'; 

export default class LoginPage extends Component {
  
  render() {
    return (
        <div className="list-page-container"> 
            <div className="list-table-container"> 
                <MyTableContainer/>
            </div> 
            <div className="list-todo-container"> 
                <TodoListComponent/>  
            </div> 
            <div className="list-card-container">
                <CardList/> 
            </div> 
            {/* <div className="side"> 
                Side
            </div> 
            <div className="list">
                List
            </div>   */}
        </div>
      // <LoginComponent/>
    );
  }
}
