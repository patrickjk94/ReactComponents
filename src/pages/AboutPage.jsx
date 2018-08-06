import React, { Component } from 'react';
import CardList from '../components/card-list/CardList';

export default class CardListPage extends Component {
  
  render() {
    return (
    <div> 
      <p> <b> This is a simple Responsive Website using the MERN stack. </b> </p>
      <p style={{fontSize: ".9em"}}> by Patrick J Kennedy </p> <br/> 
      <p> The <b> Front End </b> utilizes: </p>
        <ul> 
            <li> react-bootstrap </li> 
            <li> react-router </li> 
            <li> react-redux </li>
            <li> react-thunk </li> 
            <li> axios </li> 
        </ul> 
      <p> The <b> Back End </b> utilizes: </p>
        <ul> 
          <li> nodejs </li> 
          <li> mongodb </li> 
          <li> express </li> 
          <li> mongoose </li> 
          <li> passport </li> 
        </ul> 
    </div> 
    );
  }
}