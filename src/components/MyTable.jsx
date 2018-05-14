import React, { Component } from 'react';
import MyRow from './MyRow'; 
import { MyHeader } from './MyHeader';
import Searchbar from './Searchbar.jsx';
import { Table } from 'react-bootstrap'; 
import "./MyTable.css"; 

/*
 * A simple table implemented as a react component 
 */
class MyTable extends Component {

    constructor() {
        super();
        this.state = {
            rows: [], 
            displayed_rows: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleSearch = this.handleSearch.bind(this); 
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

  render() {
    return ( <div className="my_table">
        <Searchbar onClick={this.handleSearch} /> 
        <br/> 
        <br/> 
        <Table  striped bordered condensed hover>
        <MyHeader/> 
        <tbody>
            {this.state.displayed_rows.map(x=> <MyRow id={x.id} name={x.name} lastname={x.lastname} age={x.age} onClick={this.handleClick}/>)}
        </tbody> 
      </Table>
    </div> )
  }
}

export default MyTable; 


{/* <MyRow name="Patrick" lastname="Kennedy" age="24" /> 
<MyRow name="Guy" lastname="Cool" age="20"  />
<MyRow name="Another" lastname="Person" age="40"/>    */}
