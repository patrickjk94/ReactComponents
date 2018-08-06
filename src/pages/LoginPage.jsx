import React, { Component } from 'react';
import LoginComponent from '../components/login/LoginComponent';
import LoginRegisterComponent from '../components/LoginRegisterComponent/LoginRegisterComponent';
import cactus_img from '../cactus.png'; 
import './LoginPage.css'; 


export default class LoginPage extends Component {
  
  render() {
    return (
      <div className="login-page"> 
        <LoginRegisterComponent/> 
        <img src={cactus_img} className="cactus-img" alt="two cactus" height="300" width="200"/>
      </div> 
    );
  }
}
