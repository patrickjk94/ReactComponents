import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
import "./SimpleNavbar.css";
import { changeTab } from '../../actions';
import { Navbar } from 'react-bootstrap'; 
import { NavLink, Link } from 'react-router-dom'; 
import logo from '../../logo.svg';


export default class SimpleNavbar extends React.Component {

    constructor() {
        super(); 
        this.myFunction = this.toggle.bind(this); 
    }

    /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    toggle() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    render(){
        return (
            <div className="topnav" id="myTopnav">
                <a className="footer-text" href="https://github.com/patrickjk94/ReactComponents"> Github  <i class="fab fa-github"></i> </a> 
                <NavLink to="/" exact    activeClassName="activeNavLink" onClick={this.myFunction}> Login </NavLink> 
                <NavLink to="/tablepage" activeClassName="activeNavLink" onClick={this.myFunction}> Table </NavLink> 
                <NavLink to="/todopage"  activeClassName="activeNavLink" onClick={this.myFunction}> TodoList </NavLink> 
                <NavLink to="/cardlistpage" activeClassName="activeNavLink" onClick={this.myFunction}> CardList </NavLink> 
                <NavLink to="/dragndroppage" activeClassName="activeNavLink" onClick={this.myFunction}> DragNDrop </NavLink> 
                <a className="icon" onClick={this.toggle}>
                   <i className="fa fa-bars"></i>
                </a>
            </div> 
        )
    }
}