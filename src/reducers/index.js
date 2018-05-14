import { combineReducers } from 'redux';
import changeTabReducer from './changeTabReducer';
import visibilityFilter from './visibilityFilter'; 
import todos from './todos'; 

export default combineReducers({
    changeTabReducer, 
    todos, 
    visibilityFilter
})