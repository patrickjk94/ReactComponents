import React, { Component } from 'react';
import LoginComponent from '../components/login/LoginComponent';
import LoginRegisterComponent from '../components/LoginRegisterComponent/LoginRegisterComponent';

export default class LoginPage extends Component {
  
  render() {
    return (
      <LoginRegisterComponent/> 
      // <LoginComponent/>
    );
  }
}
