import React from 'react'; 

class MyCard extends React.Component {

    constructor(){
        super(); 
        let m_time = (new Date().toLocaleTimeString()); 
        this.state = {
            time: m_time 
        }; 
    } 

    render(){
        return(
            // this.props.m_mood determines styling for happy or sad card. 
            <div className={this.props.m_mood+"card "}>
                <div className={this.props.m_mood+"card-header "}> {this.state.time} </div>
                    <div className={this.props.m_mood+"card-main "}>
                       <i className={"material-icons " + this.props.m_mood}> {this.props.m_mood=="Happy" ? "mood" : "mood_bad"}</i> 
                    <div className={this.props.m_mood+" main-description "}>{this.props.m_mood}</div>
                </div>
          </div>
        )
    }

}

export default MyCard; 