import { connect } from 'react-redux'
import MyTable from '../MyTable'

//Import the actions and action-creators 
import { itemsFetchData, deleteUser} from "../../../actions/table-actions";

const mapStateToProps = state => {
  console.log("mapStateToPropsCalled"); 
  console.log(state); 
  return {rows: state.rows}; 
}

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: (id) => dispatch(deleteUser(id)), 
    fetchData: (url) => dispatch(itemsFetchData(url))
  }
}

//Connect to TodoList component.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyTable)