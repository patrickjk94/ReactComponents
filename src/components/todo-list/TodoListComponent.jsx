import React from "react"; 
import AddTodo from './containers/AddTodo'; 
import VisibleTodoList from './containers/VisibleTodoList'; 
import Footer from './Footer'; 
import './TodoListComponent.css'; 

export default class TodoListComponent extends React.Component {
    render(){
        return(
        <div className="todoList" >
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div> 
        )
    }
}
// style={ { border:'1px solid black' }}
