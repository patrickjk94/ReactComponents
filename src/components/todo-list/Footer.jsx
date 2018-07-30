import React from 'react'
import FilterButton from './FilterButton'
import { VisibilityFilters } from '../../reducers/visibilityFilter'
// import './css/TodoListComponent.css'; 

export default class Footer extends React.Component {
  
  render() {
    return (
      <div className="todo-footer">
        {/* <FilterButton className="filter-todo-button" filter={VisibilityFilters.SHOW_ALL}>
          All
        </FilterButton> */}
        <FilterButton className="filter-todo-button" filter={VisibilityFilters.SHOW_ACTIVE}>
          Active
        </FilterButton>
        <FilterButton className="filter-todo-button" filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterButton>
        <br/> 
    </div>  
    )
  }

}