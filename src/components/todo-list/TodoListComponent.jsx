import React from "react"; 
import AddTodoContainer from './AddTodo'; 
import TodoListContainer from './containers/TodoListContainer'; 
import Footer from './Footer'; 
import './css/TodoListComponent.css'; 

export default class TodoListComponent extends React.Component {
    render(){
        return(
        <div className="todolist-component">
            <div className="todolist-header"> <p> Todolist </p> </div>
            <div className="todolist-body">
                <AddTodoContainer />
                <TodoListContainer />
                <Footer />
            </div> 
        </div> 
        )
    }
}