import React from 'react'; 
import { NavLink } from 'react-router-dom'; 
import LoginComponent from '../login/LoginComponent';
import RegisterComponent from '../register/RegisterComponent';

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
            return <LoginComponent register={this.toggle} /> ; 
        } else {
            return <RegisterComponent login={this.toggle} /> ; 
        }
    }
}   