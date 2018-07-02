/* TodoList action creators and visibility filter reducer */ 
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL', 
  SHOW_COMPLETED: 'SHOW_COMPLETED', 
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*** ACTIONS ***/
  let nextTodoId = 0
  export const addTodo = text => ({
      type: 'ADD_TODO', 
      m_id: nextTodoId++, 
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

/** Reducer **/
  const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter
      default:
        return state
    }
  }

export default visibilityFilter
