import React from 'react'
import LinkContainer from './containers/LinkContainer'
import { VisibilityFilters } from '../../reducers/visibilityFilter'

const Footer = () => (
  <div className="todo-footer">
    {/* <span>Show: </span> */}
    <LinkContainer className="all-button" filter={VisibilityFilters.SHOW_ALL}>
      All
    </LinkContainer>
    <LinkContainer className="active-button" filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </LinkContainer>
    <LinkContainer className="completed-button" filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </LinkContainer>
    <br/> 
  </div>
);

export default Footer
