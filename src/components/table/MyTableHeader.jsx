import React, {Component} from 'react'; 

/*
*   A simple table header row implemented as a react component
*/
export default class MyTableHeader extends Component {
    render(){
    return (
        <thead>
            <tr>
                <th> ID </th> 
                <th> Firstname </th>
                <th> Lastname </th> 
                <th> </th> 
            </tr>
        </thead> 
        )
    }
}
