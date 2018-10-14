import React from 'react'
import PropTypes from 'prop-types'
import { setVisibilityFilter } from '../../reducers/visibilityFilter'
import { connect } from 'react-redux'

class FilterButton extends React.Component 
{
  render() {
    return (
      <button className={ this.props.active ?  this.props.className + " active-button" : this.props.className }
        onClick={ this.props.onClick }
        disabled={ this.props.active } 
      >
       {this.props.children}
     </button> 
    )
  }
}

FilterButton.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

/**** Do redux stuff ****/ 


const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
}); 

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterButton)