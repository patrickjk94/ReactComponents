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
            <td> <input id="row-input" />  </td>
            <td> <input id="row-input" />  </td> 
            <Button bsStyle="link" onClick={this.handleClick}><i className="fas fa-plus-circle"></i></Button> 
        </tr>);
        }
}