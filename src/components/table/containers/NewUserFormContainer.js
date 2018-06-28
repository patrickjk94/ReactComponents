import { connect } from 'react-redux'
import MyTable2 from '../MyTable'
import NewUserForm2 from '../NewUserForm2';
//TODO import actions

//Map the state to props that come in 
const mapStateToProps = state => {
}

const mapDispatchToProps = dispatch => {
  return {
    addUser: (user) =>
      dispatch({
        type: 'ADD_USER',
        fname: user.fname, 
        lname: user.lname
      })
  }
}

//Connect to TodoList component.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewUserForm2)