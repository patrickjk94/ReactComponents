import React from 'react'; 
import { NavLink } from 'react-router-dom'; 
import LoginComponent from '../login/LoginComponent';
import RegisterComponent from '../register/RegisterComponent';
import RegisterContainer from '../register/RegisterContainer';
import LoginContainer from '../login/LoginContainer';

export default class LoginRegisterComponent extends React.Component {

    constructor(props) {
        super(); 
        this.state = {
            display_login : true
        }
        this.toggle = this.toggle.bind(this); 
    }

    toggle(){
        let setting = !this.state.display_login; 
        this.setState({display_login: setting}); 
    }

    render() {
        let displayed_item; 

        if(this.state.display_login){
            return <LoginContainer register={this.toggle} /> ; 
        } else {
            return <RegisterContainer login={this.toggle} /> ; 
        }
    }
}   