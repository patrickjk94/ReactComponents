import React, {Component} from 'react'; 
import {Button} from 'react-bootstrap'; 
/*
*   A simple table row implemented as a react component
*/
export default class MyRow extends Component {

    constructor(props) {
        super(props); 
        this.state = { id: this.props.id, fname: "", lname: "" }; 
        this.handleClick = this.handleClick.bind(this); 
    }

    updateFName(evt){ this.setState({ fname: evt.target.value }); }

    updateLName(evt){ this.setState({ lname: evt.target.value }); }

    handleClick(){
        var user = {
            fname: this.state.fname, 
            lname: this.state.lname, 
            age: this.state.age
        };
        this.props.addUser(user); 
        this.setState({ fname:"", lname:"" }); 
    }

    render(){
        return (
            <React.Fragment>
                <div className="add-user-container">
                    {/* <input type="text" placeholder="Search.." style={{width:"100%"}} value={this.state.inputValue} onChange={e => this.updateInputValue(e)}/> */}
                    <input type="text" className="add-user-input" value={this.state.fname} onChange={evt => this.updateFName(evt)}/>
                    <input type="text" className="add-user-input" value={this.state.lname} onChange={evt => this.updateLName(evt)}/>
                    <button type="submit" className="add-user-button" bsStyle="link" onClick={this.handleClick}> Add User </button>
                </div> 
            </React.Fragment> 
        );
        }
}