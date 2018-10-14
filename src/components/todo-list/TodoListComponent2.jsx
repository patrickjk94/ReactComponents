import React from "react"; 
import AddTodoContainer from './AddTodo'; 
import TodoListContainer from './containers/TodoListContainer'; 
import Footer from './Footer'; 
import './css/TodoListComponent.css'; 

export default class TodoListComponent2 extends React.Component {
    render(){
        return(
        <div>
            <div className="todolist-header"> <p> Todolist </p> </div>
            <div className="todolist-body">
                <AddTodoContainer />
                <TodoListContainer />
                {/***** Footer *****/}
                <div className="todo-footer">
                    <FilterButton className="filter-todo-button" filter={VisibilityFilters.SHOW_ALL}>
                    All
                    </FilterButton>
                    <FilterButton className="filter-todo-button" filter={VisibilityFilters.SHOW_ACTIVE}>
                    Active
                    </FilterButton>
                    <FilterButton className="filter-todo-button" filter={VisibilityFilters.SHOW_COMPLETED}>
                    Completed
                    </FilterButton>
                    <br/> 
                </div>  
            </div> 
        </div> 
        )
    }
}