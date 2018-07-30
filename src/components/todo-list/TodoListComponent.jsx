import React from "react"; 
import AddTodoContainer from './AddTodo'; 
import TodoListContainer from './containers/TodoListContainer'; 
import Footer from './Footer'; 
import './css/TodoListComponent.css'; 

export default class TodoListComponent extends React.Component {
    render(){
        return(
        <div className="todoList" >
            <div className="todoListHeader"> <p> Todolist </p> </div>
            <div className="todoListBody">
                <AddTodoContainer />
                <TodoListContainer />
                <Footer />
            </div> 
        </div> 
        )
    }
}