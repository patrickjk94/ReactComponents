import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
import "./SimpleNavbar.css";
import { changeTab } from '../actions';
import { Link } from 'react-router-dom'; 

class Navbar extends React.Component {

    constructor(){
        super(); 
        this.clickLogin = this.clickLogin.bind(this); 
        this.clickPage1 = this.clickPage1.bind(this); 
    }

    componentWillMount(){
    }   

    clickLogin(){
        alert("this" + JSON.stringify(this)); 
        console.log("clickLogin"); 
        changeTab(0); 
    }

    clickPage1(){
        alert("this" + JSON.stringify(this)); 
        console.log("clickLogin");
        changeTab(1);
    }

    render(){
        console.log(this.props.activeTab); 
        console.log(window.location.href); 
        return (
            <ul>
                {/* className={((this.props.activeTab == 0) ? 'active' : '')}  */}
                <li><Link to="/" className={((window.location.href == "http://localhost:3000/") ? 'active' : '')} >Login</Link></li>
                <li><Link to="/tablepage" className={((window.location.href == "http://localhost:3000/tablepage") ? 'active' : '')}> Table </Link></li>
                {/* className={((this.props.activeTab == 1) ? 'active' : '')} */}
                <li><Link to="/todopage"> TodoList </Link></li> 
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        activeTab: state.activeTab
    }
}
  
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({changeTab : changeTab}, dispatch)
}; 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)