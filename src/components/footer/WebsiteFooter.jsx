import React from 'react';
import "./WebsiteFooter"; 

export default class WebsiteFooter extends React.Component { 
    render() { 
        return (
            <div className="App-footer"> 
                <p className="footer-text" style={{ fontSize:"2.0em",  marginRight:"3px"}}> <a className="footer-text" href="https://github.com/patrickjk94/ReactComponents"> Github  <i className="fab fa-github"></i> </a></p> 
            </div> 
        )
    }
}