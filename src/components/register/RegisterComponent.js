import React from 'react'; 
import './RegisterComponent.css'; 
import { NavLink } from 'react-router-dom'; 

export default class RegisterComponent extends React.Component {
        render() {
            return <div className="login-page">
                <div className="form">
                <p> Register Form </p> 
                <form className="register-form">
                    <input type="text" placeholder="name"/>
                    <input type="password" placeholder="password"/>     
                    <input type="text" placeholder="email address"/> 
                    <button>create</button>
                    <p className="message">Already registered? <a href="#">Sign In</a></p> 
                </form> 
                <form className="login-form">
                    <input type="text" placeholder="email"/>
                    <input type="password" placeholder="password"/>
                    <input type="password" placeholder="re-enter password"/>
                    <button>register</button>
                    <p className="message">Already have an account? <a href="#" onClick={this.props.login}> Login </a></p>
                    
                    </form>
                </div>
            </div>
            }
        } 