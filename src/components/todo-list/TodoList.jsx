import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import {SortableContainer, arrayMove} from 'react-sortable-hoc';

const SortableList = SortableContainer(({todos, toggleValue, deleteValue}) => {
  return (
    <div className="listContainer">
      {todos.map((todo, index) => (
        <TodoItem key={`item-${index}`} index={index} value={todo.text} todo={todo} toggleValue={toggleValue} deleteValue={deleteValue}/>
      ))}
    </div>
  );
});

export default class TodoList extends React.Component {

  constructor(props) {
    super();
    this.state = { todos: props.todos }; 
  }

  /* Method used in sorting when dragging and dropping */ 
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      todos: arrayMove(this.state.todos, oldIndex, newIndex)
    });
  }; 

  deleteValue() {
    console.log("deleting value!!"); 
  }

  toggleValue() {
    console.log("toggling value!!"); 
  }

  render() {
    console.log("TODOS: "); 
    console.log(this.props.todos); 
    return <SortableList todos={this.state.todos} onSortEnd={this.onSortEnd} deleteValue={this.deleteValue} toggleValue={this.toggleTodo}/>;
  }

}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}
