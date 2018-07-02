import React from 'react'
import FilterButton from './FilterButton'
import { VisibilityFilters } from '../../reducers/visibilityFilter'

export default class Footer extends React.Component {
  
  render() {
    return (
      <div className="todo-footer">
        <FilterButton className="all-button" filter={VisibilityFilters.SHOW_ALL}>
          All
        </FilterButton>
        <FilterButton className="active-button" filter={VisibilityFilters.SHOW_ACTIVE}>
          Active
        </FilterButton>
        <FilterButton className="completed-button" filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterButton>
        <br/> 
    </div>  
    )
  }

}