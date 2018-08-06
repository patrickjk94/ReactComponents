import { connect } from 'react-redux'
import TodoList from '../TodoList'
import { toggleTodo, VisibilityFilters } from '../../../reducers/visibilityFilter'

const getVisibleTodos = (todos, filter) => {
  switch (filter) 
  {
    //Return all todos
    case VisibilityFilters.SHOW_ALL:
      return todos
    //Return all todos that are completed
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)  
    //Return all todos that are active 
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)  
    //Default -- Filter is not recognized 
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  // Sort the state.todos based on the visibility filter 
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

//Connect to TodoList component.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)