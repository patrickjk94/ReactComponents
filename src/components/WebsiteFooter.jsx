import React from 'react';
import "./WebsiteFooter.jsx"; 

class WebsiteFooter extends React.Component { 
    render(){ 
        return (
            <div className="App-footer"> 
                <p style={{ color: "#4CAF50" }}> Patrick Kennedy </p> 
                <p> <a href="https://github.com/patrickjk94"> My github </a> </p> 
            </div> 
        )
    }
}

export default WebsiteFooter; 