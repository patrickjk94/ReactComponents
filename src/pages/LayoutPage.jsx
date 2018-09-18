import React, { Component } from 'react';
import './LayoutPage.css'; 
import JournalComponent from '../components/journal/JournalComponent';
import MoodTracker from '../components/mood-tracker/MoodTracker';
import TodoListComponent from "../components/todo-list/TodoListComponent"; 
import MyTableContainer from '../components/table/containers/MyTableContainer';

export default class LayoutPage extends Component {  
  render() {
    return (
        <div className="main-page-container"> 
            <div className="main-page-left-container">  
                <TodoListComponent/> 
            </div> 
            <div className="main-page-middle-container"> 
                <JournalComponent/> 
            </div> 
            <div className="main-page-right-container"> 
                <MoodTracker/>  
            </div> 
        </div> 
    );
  }
}


// <div className="main-page-container"> 
// <div className="main-page-left-container">  
//     <div className="main-page-left-top"> 
//         <div className="simple-component-top"> 
//             <JournalComponent/> 
//         </div> 
//     </div> 
//     <div className="main-page-left-bottom"> 
//         <div className="simple-component-bottom">
//             <MyTableContainer/> 
//         </div> 
//     </div> 
// </div> 
// <div className="main-page-right-container"> 
//     <div className="main-page-right-top"> 
//         <div className="simple-component-top"> 
//             <MoodTracker/>  
//         </div> 
//     </div> 
//     <div className="main-page-right-bottom"> 
//         <div className="simple-component-bottom"> 
//             <TodoListComponent/> 
//         </div> 
//     </div> 
// </div> 
// </div> 
