import React from 'react';
import './LoginComponent.css'; 
import { NavLink } from 'react-router-dom'; 

export default class LoginComponent extends React.Component {

    constructor(props){
        super(props); 
        this.state = {
            email: '', 
            username: '', 
            password: '', 
        }

        this.updateUsername = this.updateUsername.bind(this); 
        this.updatePassword = this.updatePassword.bind(this); 
        this.login = this.login.bind(this); 
    }

    updateUsername(evt){ this.setState({ username: evt.target.value }); }
    updatePassword(evt){ this.setState({ password: evt.target.value }); }

    login(e) {
        var user = {
            username: this.state.username, 
            password: this.state.password, 
        };
        this.props.login(user); 
    }

    render() {
        return <div className="login-page">
            <div className="form">
            <p> Login Form </p> 
            <form className="login-form">
                <input type="text" placeholder="username" value={this.state.username} onChange={evt => this.updateUsername(evt)}/>
                <input type="password" placeholder="password" value={this.state.password} onChange={evt => this.updatePassword(evt)}/>
                <button onClick={this.login}> login </button>
                <p className="message"> Not registered? <a href="#" onClick={this.props.register}> Create an account </a></p>
                </form>
            </div>
        </div>
        }
    } 