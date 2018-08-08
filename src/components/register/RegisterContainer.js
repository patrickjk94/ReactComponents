import { connect } from 'react-redux'

// 1. import the actions and action-creators
import RegisterComponent from './RegisterComponent'
import { registerUser } from '../../actions/register-actions';

// 2. map redux state to component props 
const mapStateToProps = state => { return {}; }

// 3. map dispatch action/action-creator to component props 
const mapDispatchToProps = dispatch => {
  return {
    registerUser: (user) => dispatch(registerUser(user))
  }
}

//4. connect methdods and redux-store to Component 
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterComponent)