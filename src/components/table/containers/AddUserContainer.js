import { connect } from 'react-redux'
import {addUser} from '../../../actions/table-actions'; 
import AddUser from '../AddUser';

//Map the state to props that come in 
const mapStateToProps = state => {
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: (user) => dispatch( addUser(user))
  }
}

//Connect to TodoList component.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser)