import { connect } from 'react-redux'
import Link from '../Link'
import { setVisibilityFilter } from '../../../reducers/changeTabReducer'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
}); 

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)