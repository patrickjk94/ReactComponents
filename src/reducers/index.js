import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter'; 
import todos from './todos'; 
import rows from './rows'; 
import searchFilter from './searchFilter'; 

export default combineReducers({
    todos, 
    visibilityFilter, 
    rows, 
    searchFilter
})