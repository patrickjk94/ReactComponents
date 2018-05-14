import React, {Component} from 'react'; 
import {Button} from 'react-bootstrap'; 
/*
*   A simple table row implemented as a react component
*/
export class MyRow extends Component {

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
            <td> {this.props.id} </td> 
            <td> {this.props.name} </td>
            <td> {this.props.lastname} </td> 
            <td> {this.props.age} </td> 
            <Button bsStyle="link" onClick={this.handleClick}><i className="fas fa-minus-circle"></i></Button> 
        </tr>);
        }
}

export default MyRow; 