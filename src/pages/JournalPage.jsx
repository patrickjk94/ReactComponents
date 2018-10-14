import React, { Component } from 'react';
import JournalComponent from '../components/journal/JournalComponent';

export default class JournalPage extends Component {  
  render() {
    return (
      <div className="journal-container"> 
        <JournalComponent/>
      </div>
    );
  }
}