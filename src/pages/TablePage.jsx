import React, { Component } from 'react';
import MyTable from '../components/MyTable'; 
import '../App.css';
import logo from '../logo.svg';

class Page1 extends Component {
  render() {
    return (
    <div className="App">
      {/* <SimpleNavbar/>  */}
      <br />  
      <MyTable/>
      <br /> 
    </div>
    );
  }
}

export default Page1;


