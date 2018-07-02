import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../reducers/visibilityFilter'

class AddTodo extends React.Component {
  
  constructor(props){
    super(); 
    this.state = { input_value: "" }; 
    this.submit = this.submit.bind(this);
    this.updateInput = this.updateInput.bind(this); 
  }

  updateInput(evt){
    this.setState({ input_value: evt.target.value });
  }

  submit(e){
    e.preventDefault(); 
    if (!this.state.input_value.trim()) 
      return; 

    //Update the store and state 
    this.props.addTodo(this.state.input_value); 
    this.setState({ input_value: "" });
  }

  render() 
  {
    return (
      <div >
        <form onSubmit={e => this.submit(e)}>
          <div className="todo-list-header"> {/*className="add-todo-input"*/} 
            <input type="text" className="add-todo-input" onChange={evt => this.updateInput(evt)} />
            <input type="submit" className="add-todo-button"  value="Add Todo" /> 
          </div>​
        </form>
        </div> 
    )
  }
}

const mapStateToProps = state => {
  return {}; 
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (id) => dispatch(addTodo(id))
  }
}

//Connect to AddTodo Component 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo)



