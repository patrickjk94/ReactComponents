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
                <td> <input style={{ margin: "2px" }} value={this.state.fname} onChange={evt => this.updateFName(evt)}/>  </td>
                <td> <input style={{ margin: "2px"  }} value={this.state.lname} onChange={evt => this.updateLName(evt)}/>  </td> 
                <td> <Button type="submit" style={{textAlign:"center", verticalAlign: "middle", width:"50px", color:"#4CAF50"}} 
                             bsStyle="link" onClick={this.handleClick}><i className="fas fa-plus-circle"></i></Button>  
                </td> 
            </React.Fragment> 
        );
        }
}