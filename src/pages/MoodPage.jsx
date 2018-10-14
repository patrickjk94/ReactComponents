import React, { Component } from 'react';
import MoodTracker from '../components/mood-tracker/MoodTracker';
import './MoodPage.css'; 

export default class MoodTrackerPage extends Component {  
  render() {
    return (
      <div className="mood-tracker-container mood-component"> 
        <MoodTracker/>
      </div>
    );
  }
}