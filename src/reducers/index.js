import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter'; 
import todos from './todos'; 
import table_reducer from './table_reducer'; 
import searchFilter from './searchFilter'; 

export default combineReducers({
    todos, 
    visibilityFilter, 
    table_reducer, 
    searchFilter
})