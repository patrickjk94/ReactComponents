import React, {Component} from 'react'; 
import {FormGroup, FormControl, Col, Button} from 'react-bootstrap'; 

export default class Searchbar extends React.Component {
    
    constructor(props) {
        super(props); 
        this.handleClick = this.handleClick.bind(this); 
        this.state = {
            inputValue: ''
          };      
    }

    handleClick(){
        //this.props.onClick(); 
        
    }

    render(){
        return (
            <form>
                <input className="search-bar" type="text" placeholder="Search.." style={{width:"100%"}} value={this.state.inputValue} onChange={e => this.updateInputValue(e)}/>
            </form> 
            )
    }

    updateInputValue(evt) {
        this.setState({
          inputValue: evt.target.value
        }); 
        this.props.updateFilter(evt.target.value); 
        // this.props.onClick(evt.target.value); 
    }
    
}