import React, {Component} from 'react'; 
import {Button} from 'react-bootstrap'; 
/*
*   A simple table row implemented as a react component
*/
export default class MyRow extends Component {

    constructor(props) {
        super(props); 
        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick(){
        this.props.onClick(this.props.id); 
    }

    render(){
        return (
        <tr>
            <td> {this.props.fname} </td>
            <td> {this.props.lname} </td> 
            <td style={{textAlign:"center", verticalAlign: "middle", width:"50px"}}> <Button bsStyle="link" onClick={this.handleClick}><i className="fas fa-minus-circle"></i></Button> </td>  
        </tr>);
        }
}
