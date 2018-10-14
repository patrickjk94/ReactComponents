import { connect } from 'react-redux'
import TodoList from '../TodoList'
import { deleteTodo, toggleTodo, VisibilityFilters } from '../../../reducers/visibilityFilter'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = state => ({
  // Sort the state.todos based on the visibility filter 
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)), 
  deleteTodo: id => dispatch(deleteTodo(id))
})

//Connect to TodoList component.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)