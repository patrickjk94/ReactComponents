import { connect } from 'react-redux'
import MyTable from '../MyTable'

//Import the actions and action-creators
import { itemsFetchData, deleteUser, addUser } from "../../../actions/table-actions";

const mapStateToProps = state => {
  console.log("rows:"); 
  console.log(state.table_reducer.rows); 
  return {
    rows: state.table_reducer.rows,
    filter: state.searchFilter, 
    has_data: state.table_reducer.has_data 
  };
}

const mapDispatchToProps = dispatch => {
  return {
    removeUser: (id) => dispatch(deleteUser(id)), 
    fetchData: (url) => dispatch(itemsFetchData(url)),
    addUser: (user) => dispatch( addUser(user))
  }
}

//Connect to TodoList component.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyTable)