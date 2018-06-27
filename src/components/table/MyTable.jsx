import React, { Component } from 'react';
import MyRow from './MyRow'; 
import MyTableHeader from './MyTableHeader';
import Searchbar from './Searchbar.jsx';
import { Table } from 'react-bootstrap'; 
import NewUserForm from './NewUserForm'; 
import axios from "axios"; 
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
        this.removeUser = this.removeUser.bind(this);
        this.handleSearch = this.handleSearch.bind(this); 
        this.addUser = this.addUser.bind(this); 
    }

    componentWillMount() {
        axios.get("http://localhost:8000/getAllUsers").then(response => {
            
            var i_id = 0; 
            //create an array of users only with relevant data 
            const newUsers = response.data.map(c => {
                console.log(c); 
                console.log(c.fname); 
                console.log(c.lname); 
                i_id = i_id +1; 
                return {
                    id: ('' + c._id),
                    fname: c.fname, 
                    lname: c.lname
                }; 
            }); 
            
            console.log("all users"); 
            console.log(newUsers); 

            //create a new state object without mutating the original State
            this.setState({rows: newUsers});
            this.setState({displayed_rows: newUsers});    
        })
    }

    handleSearch(search_string) {
        const result = this.filterByValue(this.state.rows, search_string); 
        this.setState({
            displayed_rows: result
        })
    }

    filterByValue(array, string) {
        return array.filter(o =>
            Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
    }

//Create
    addUser(e, f, l, a) {
        e.preventDefault();
        let m_id = this.state.displayed_rows.length+1; 
        this.setState({
            displayed_rows: [
                ...this.state.displayed_rows, 
                {id:m_id, fname: f, lname: l, age: a}
            ]
        })
        return false; 
    }

//Remove
        removeUser(id)   {
            let newArray = this.state.rows.slice();
            var i;
            for (i = 0; i < newArray.length; i++) {
                if(newArray[i].id == id){
                    newArray.splice(i, 1);
                }
            }
    
            axios.delete('http://localhost:8000/user/'+id).then(function(response) {
                console.log(response.data);
            }).catch(function(error) {
                console.log(error);
            });
    
            // newArray.splice(id, 1);  
            this.setState({
                rows: newArray, 
                displayed_rows: newArray
              });    
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
                        {this.state.displayed_rows.map(x => <MyRow id={x.id} fname={x.fname} lname={x.lname} onClick={this.removeUser}/>)}
                        {/* <MyInputRow/> */}
                    </tbody> 
                </Table>
                <NewUserForm submitform={this.addUser}/>
        </div> 
        </div>
    )
  }
}