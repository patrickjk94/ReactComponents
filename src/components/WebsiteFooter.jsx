import React from 'react';
import "./WebsiteFooter.jsx"; 

class WebsiteFooter extends React.Component { 
    render() { 
        return (
            <div className="App-footer"> 
                <p className="footer-text" style={{ fontSize:"2.0em",  marginRight:"3px"}}> <a className="footer-text" href="https://github.com/patrickjk94"> My github </a> <i class="fab fa-github"></i> </p> 
            </div> 
        )
    }
}

export default WebsiteFooter; 