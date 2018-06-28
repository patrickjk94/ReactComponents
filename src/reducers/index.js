import { combineReducers } from 'redux';
import visibilityFilter from './visibilityFilter'; 
import todos from './todos'; 
import rows from './rows'; 

export default combineReducers({
    todos, 
    visibilityFilter, 
    rows
})