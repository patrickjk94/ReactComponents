import { connect } from 'react-redux'
import MyTable from '../MyTable'

//Import the actions and action-creators
import { login } from "../../../actions/login-actions";
import LoginComponent from './LoginComponent';

const mapStateToProps = state => {
  return { };
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => dispatch(login(user)), 
  }
}

//Connect to TodoList component.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent)