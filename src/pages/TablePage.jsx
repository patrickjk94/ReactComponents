import React, { Component } from 'react';
import MyTable from '../components/MyTable'; 
import '../App.css';
import logo from '../logo.svg';

class Page1 extends Component {
  render() {
    return (
    <div className="App">
      <br />  
      <MyTable/>
      <br /> 
      <div className="my_text"> 
        <p> This is my table. It is a React-Bootstrap table that uses props and a callback function to filter results based on search criteria.</p> 
      </div> 
    </div>
    );
  }
}

export default Page1;


