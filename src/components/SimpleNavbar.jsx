import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
// import "./SimpleNavbar.css";
import { changeTab } from '../actions';
import { Navbar } from 'react-bootstrap'; 
import { NavLink, Link } from 'react-router-dom'; 
import logo from '../logo.svg';


export default class SimpleNavbar extends React.Component {

    constructor() {
        super(); 
        this.myFunction = this.myFunction.bind(this); 
    }

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  myFunction() {
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
                <NavLink to="/" exact    activeClassName="activeNavLink"> Login    </NavLink> 
                <NavLink to="/tablepage" activeClassName="activeNavLink"> Table    </NavLink> 
                <NavLink to="/todopage"  activeClassName="activeNavLink"> TodoList </NavLink> 
                <NavLink to="/cardlistpage" activeClassName="activeNavLink"> CardList </NavLink> 
                <a className="icon" onClick={this.myFunction}>
                   <i className="fa fa-bars"></i>
                </a>
            </div> 
        )
    }
}