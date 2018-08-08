import React from 'react'; 
import './RegisterComponent.css'; 
import { NavLink } from 'react-router-dom'; 

export default class RegisterComponent extends React.Component {

    constructor(props){
        super(props); 
        this.state = {
            email: '', 
            username: '', 
            password: '', 
        }

        this.updateEmail = this.updateEmail.bind(this); 
        this.updateUsername = this.updateUsername.bind(this); 
        this.updatePassword = this.updatePassword.bind(this); 
        this.register = this.register.bind(this); 
    }

    updateEmail(evt){ this.setState({ email: evt.target.value }); }
    updateUsername(evt){ this.setState({ username: evt.target.value }); }
    updatePassword(evt){ this.setState({ password: evt.target.value }); }

    register(e){
        var user = {
            email: this.state.email, 
            username: this.state.username, 
            password: this.state.password
        };
        alert(user.email + user.username + user.password);  
        this.props.registerUser(user); 
    }

    render() {
        return <div className="login-page">
            <div className="form">
            <p> Register Form </p> 
            <form className="login-form">
                <input type="text" placeholder="email" value={this.state.email} onChange={evt => this.updateEmail(evt)}/>
                <input type="text" placeholder="username" value={this.state.username} onChange={evt => this.updateUsername(evt)}/>
                <input type="password" placeholder="password" value={this.state.password} onChange={evt => this.updatePassword(evt)}/>
                <input type="password" placeholder="re-enter password" />
                <button onClick={this.register}> register </button>
                <p className="message"> Already have an account? <a href="#" onClick={this.props.login}> Login </a></p>
            </form>
            </div>
        </div>
    }
}    