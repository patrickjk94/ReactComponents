import React, { Component } from 'react';
import MyRow from './MyRow'; 
import MyTableHeader from './MyTableHeader';
import Searchbar from './Searchbar.jsx';
import { Table } from 'react-bootstrap'; 
import "./MyTable.css"; 
import NewUserFormContainer from './containers/NewUserFormContainer';

/*
 * A simple table implemented as a react component 
 */
export default class MyTable extends Component {

    constructor() {
        super();
        this.removeUser = this.removeUser.bind(this); 
    }

    componentDidMount() {
        this.props.fetchData('http://localhost:8000/getAllUsers');
    }

    removeUser(id)   {
        this.props.deleteUser(id); 
    }

    // handleSearch(search_string) {
    //     const result = this.filterByValue(this.state.rows, search_string); 
    //     this.setState({
    //         displayed_rows: result
    //     })
    // }

    // filterByValue(array, string) {
    //     return array.filter(o =>
    //         Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
    // }

  render() {
    return ( 
        <div className="my_table_wrapper"> 
        <div className="my_table">
                <Searchbar onClick={this.handleSearch} /> 
                <br/> 
                <Table className="actual_table" bordered condensed>
                    <MyTableHeader/> 
                    <tbody>
                        {this.props.rows.map(x => <MyRow id={x.id} fname={x.fname} lname={x.lname} onClick={this.removeUser}/>)}
                    </tbody> 
                </Table>
                <NewUserFormContainer/>
        </div> 
        </div>
    )
  }

}