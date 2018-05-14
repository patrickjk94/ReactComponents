import React, {Component} from 'react'; 
import {FormGroup, FormControl, Col, Button} from 'react-bootstrap'; 

class Searchbar extends React.Component {
    
    constructor(props) {
        super(props); 
        this.handleClick = this.handleClick.bind(this); 
        this.state = {
            inputValue: ''
          };      
    }

    handleClick(){
        this.props.onClick(); 
    }

    render(){
        return (
            <div> 
            {/* <div className="search-container pull-right"> */}
            <form>
            <input type="text" placeholder="Search.." style={{width:"50%"}} value={this.state.inputValue} onChange={e => this.updateInputValue(e)}/>
            {/* <FormGroup controlId="formHorizontalAddTodo">
                <Col sm={10}>
                <FormControl type="input" placeholder="Enter Text" />
                </Col>
            </FormGroup> */}
            </form> 
            </div>


            )
    }

    updateInputValue(evt) {
        this.setState({
          inputValue: evt.target.value
        }); 
        this.props.onClick(evt.target.value); 
    }
    
}

export default Searchbar; 