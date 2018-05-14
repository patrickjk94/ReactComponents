/* Action Types */ 
export const CHANGE_TAB = 'CHANGE_TAB'

/* Other constants */
/* TODO ? */

/* Action Creators */ 
export function changeTab(activeTab) {
    alert("Change Tab is being called!"); 
    return { type: CHANGE_TAB, payload:activeTab }; 
}

/* TodoList action creators */ 
let nextTodoId = 0
export const addTodo = text => ({
    type: 'ADD_TODO', 
    id: nextTodoId++, 
    text
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER', 
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO', 
    id
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL', 
    SHOW_COMPLETED: 'SHOW_COMPLETED', 
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}