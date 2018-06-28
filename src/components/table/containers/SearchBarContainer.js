import { connect } from 'react-redux'
import {addUser} from '../../../actions/table-actions'; 
import Searchbar from '../Searchbar';
import { updateFilterValue } from "../../../actions/filter-actions";

//Map the state to props that come in 
const mapStateToProps = state => {
}

const mapDispatchToProps = dispatch => {
  return {
    updateFilter: (filterValue) => dispatch(updateFilterValue(filterValue))
  }
}

//Connect to TodoList component.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Searchbar)