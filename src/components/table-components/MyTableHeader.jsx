import React, {Component} from 'react'; 

/*
*   A simple table header row implemented as a react component
*/
export class MyTableHeader extends Component {
    render(){
    return (
        <thead>
            <tr>
                <th> ID </th> 
                <th> Firstname </th>
                <th> Lastname </th> 
                <th> Age </th>
                <th> Remove </th> 
            </tr>
        </thead> 
        )
    }
}

export default MyTableHeader; 