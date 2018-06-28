import React, { Component } from 'react';
import MyRow from './MyRow'; 
import Searchbar from './Searchbar.jsx';
import { Table } from 'react-bootstrap'; 
import "./css/MyTable.css"; 
import NewUserFormContainer from './containers/AddUserContainer';
import MyInputRow from './MyInputRow'; 
import SearchBarContainer from './containers/SearchBarContainer';

/*
 * A Simple table implemented as a react component 
 */
export default class MyTable extends Component {

    constructor(props) {
        super();
        this.state = { rows: props.rows, displayed_rows: props.rows }; 
        // this.removeUser = this.removeUser.bind(this); 
        console.log("filter value: "); 
        console.log(props.filter);
    }

    // removeUser(id)   {
    //     this.props.deleteUser(id); 
    // }

    handleSearch() {
        if(this.state && this.state.rows){
            const result = this.filterByValue(this.state.rows, this.props.filter); 
            this.setState({
                displayed_rows: result
            })
        }
    }

    filterByValue(array, string) {
        return array.filter(o =>
            Object.keys(o).some(k => {
                return o[k].toLowerCase().includes(string.toLowerCase()); 
            }));
    }

    getFilteredData(){
        if(this.props.filter == "")
            return this.props.rows; 
        return this.filterByValue(this.props.rows, this.props.filter);         
    }

  render() {

    let filtered_data = this.getFilteredData(); 

    return ( 
        <div className="my_table_wrapper"> 
            <div className="my_table"> 
                    <SearchBarContainer onClick={this.handleSearch} />  
                    <br/>  
                    <Table className="actual_table" bordered condensed> 
                        <thead> 
                            <tr> 
                                <th> Firstname </th> 
                                <th> Lastname </th>  
                                <th> </th>  
                            </tr> 
                        </thead>  
                        <tbody> 
                            {filtered_data.map(x => <MyRow id={x.id} fname={x.fname} lname={x.lname} onClick={this.props.removeUser}/>)} 
                            {/* <MyInputRow/>  */}
                        </tbody> 
                    </Table>
                    <NewUserFormContainer/>
            </div> 
        </div> 
    )
  }

}