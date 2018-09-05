import React from "react"; 
import './JournalComponent.css'; 

export default class Journal extends React.Component {

    constructor(){
        super();         
    }

    render() {
        return (
            <div className="journal-component" >
                <p className="journal-header" > Journal Entry for 10/12/18 </p> 
                <div className="textarea-container"> 
                    <textarea className="journal-text-area"></textarea> 
                </div> 
                <button className="save-journal-button"> Save </button> 
            </div> 
        )
    }
}