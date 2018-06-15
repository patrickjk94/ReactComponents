import React, { Component } from 'react';
import MyRow from './MyRow'; 
import MyTableHeader from './MyTableHeader';
import Searchbar from './Searchbar.jsx';
import { Table } from 'react-bootstrap'; 
import NewUserForm from './NewUserForm'; 
import "./MyTable.css"; 

/*
 * A simple table implemented as a react component 
 */
export default class MyTable extends Component {

    constructor() {
        super();
        this.state = {
            rows: [], 
            displayed_rows: [], 
            contacts: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this); 
        this.addUser = this.addUser.bind(this); 
    }

    handleClick(id)   {
        let newArray = this.state.rows.slice();
        var i;
        for (i = 0; i < newArray.length; i++) {
            if(newArray[i].id == id){
                newArray.splice(i, 1);
            }
        }
        // newArray.splice(id, 1);  
        this.setState({
            rows: newArray, 
            displayed_rows: newArray
          });    
    }

    handleSearch(search_string) {
        const result = this.filterByValue(this.state.rows, search_string); 
        this.setState({
            displayed_rows: result
        })
        // console.log(result);        
    }

    filterByValue(array, string) {
        return array.filter(o =>
            Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
    }

    componentWillMount() {
        this.setState({rows: [
            {id:"1", name:"Jill", lastname:"Smith", age:"50"}, 
            {id:"2", name:"Patrick", lastname:"Kennedy", age:"24"}, 
            {id:"3", name:"Guy", lastname:"Cool", age:"20"}, 
            {id:"4", name:"Another", lastname:"Person", age:"40"}
        ]});
        this.setState({displayed_rows: [
            {id:"1", name:"Jill", lastname:"Smith", age:"50"}, 
            {id:"2", name:"Patrick", lastname:"Kennedy", age:"24"}, 
            {id:"3", name:"Guy", lastname:"Cool", age:"20"}, 
            {id:"4", name:"Another", lastname:"Person", age:"40"}
        ]});
    }

    addUser(e, f, l, a) {
        e.preventDefault();
        let m_id = this.state.displayed_rows.length+1; 
        this.setState({
            displayed_rows: [
                ...this.state.displayed_rows, 
                {id:m_id, name: f, lastname: l, age: a}
            ]
        })
        return false; 
    }

  render() {
    return ( 
        <div className="my_table_wrapper"> 
        <div className="my_table">
                <Searchbar onClick={this.handleSearch} /> 
                <br/> 
                <Table className="actual_table" bordered condensed>
                    <MyTableHeader/> 
                    <tbody>
                        {this.state.displayed_rows.map(x=> <MyRow id={x.id} name={x.name} lastname={x.lastname} onClick={this.handleClick}/>)}
                        {/* <MyInputRow/> */}
                    </tbody> 
                </Table>
                <NewUserForm submitform={this.addUser}/>
        </div> 
        </div>
    )
  }
}