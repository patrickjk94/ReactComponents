import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
import "./SimpleNavbar.css";
import { changeTab } from '../actions';
import { Navbar } from 'react-bootstrap'; 
import { NavLink, Link } from 'react-router-dom'; 
import logo from '../logo.svg';


export default class SimpleNavbar extends React.Component {

    constructor() {
        super(); 
    }

    render(){
        return (
            <ul> 
                    <li> <NavLink to="/" exact    activeClassName="activeNavLink"> Login    </NavLink>  </li> 
                    <li> <NavLink to="/tablepage" activeClassName="activeNavLink"> Table    </NavLink> </li> 
                    <li> <NavLink to="/todopage"  activeClassName="activeNavLink"> TodoList </NavLink> </li> 
            </ul> 
        )
    }
}