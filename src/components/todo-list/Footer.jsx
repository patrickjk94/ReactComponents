import React from 'react'
import FilterLink from './containers/LinkContainer'
import { VisibilityFilters } from '../../reducers/visibilityFilter'

const Footer = () => (
  <div className="todo-footer">
    {/* <span>Show: </span> */}
    <FilterLink className="all-button" filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink className="active-button" filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink className="completed-button" filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
    <br/> 
  </div>
);

export default Footer
