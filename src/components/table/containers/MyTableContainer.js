import { connect } from 'react-redux'
import MyTable from '../MyTable'

//Import the actions and action-creators
import { itemsFetchData, deleteUser} from "../../../actions/table-actions";

const mapStateToProps = state => {
  return {
    rows: state.rows,
    filter: state.searchFilter 
  }; 
}

const mapDispatchToProps = dispatch => {
  return {
    removeUser: (id) => dispatch(deleteUser(id)), 
    fetchData: (url) => dispatch(itemsFetchData(url))
  }
}

//Connect to TodoList component.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyTable)