import React from 'react'; 
import "./SimpleNavbar.css";
import { NavLink } from 'react-router-dom'; 

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
                <NavLink to="/axioslistpage" activeClassName="activeNavLink" onClick={this.myFunction}> AxiosList </NavLink> 
                <a className="icon" onClick={this.toggle}>
                   <i className="fa fa-bars"></i>
                </a>
            </div> 
        )
    }
}