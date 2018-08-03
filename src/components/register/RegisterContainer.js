import { connect } from 'react-redux'
import RegisterComponent from './RegisterComponent'

//1. import the actions and action-creators

const mapStateToProps = state => {
  return {
  };
}

const mapDispatchToProps = dispatch => {
  return {
    removeUser: (id) => dispatch(deleteUser(id)), 
  }
}

//Connect to TodoList component.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterComponent)