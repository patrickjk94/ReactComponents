import React from 'react'; 

import './MoodTracker.css';

export default class MoodTracker extends React.Component {

    constructor() {
        super(); 
    }

    render(){
        return (
            <React.Fragment>
                {/** Header **/}
                <div className="mood-header">Mood Tracker</div>
                <div className="mood-content"> 
                    <div className="my-button-row">
                        <button className="mood-button mood-happy-button"> 6 </button>
                        <button className="mood-button mood-happy-button"> 7 </button> 
                        <button className="mood-button mood-happy-button"> 8 </button> 
                        <button className="mood-button mood-happy-button"> 9 </button> 
                        <button className="mood-button mood-happy-button"> 10 </button> 
                    </div>
                    <div className="my-button-row">
                        <button className="mood-button mood-sad-button" > 1 </button>
                        <button className="mood-button mood-sad-button" > 2 </button>
                        <button className="mood-button mood-sad-button" > 3 </button>
                        <button className="mood-button mood-sad-button" > 4 </button>
                        <button className="mood-button mood-sad-button" > 5 </button>
                    </div>
                </div> 
                {/* <button className="mood-results-button"> View Graph </button>  */}
            </React.Fragment> 
        )
    }
}