import React, { Component } from 'react';
import logo from './logo.svg';
import { Button } from 'react-bootstrap'; 
import  MyTable  from './components/MyTable'; 
import { Table }   from 'react-bootstrap'; 
import MyNavbar from './components/MyNavbar'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './pages/Login'; 
import TablePage  from './pages/TablePage'; 
import TodoPage from './pages/TodoPage'; 
import { Provider } from 'react-redux'; 
import SimpleNavbar from './components/SimpleNavbar';
import './App.css';
import WebsiteFooter from './components/WebsiteFooter';

class App extends Component {
  render() {
    return (
        <div>
        <Router>
        <div>
          {/** The Header **/}
          <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome these are some custom React Components</h1>
            </header>
          </div> 
            <SimpleNavbar/>  
          <div className="content"> 
            <Route exact path="/" component={Login} />
            <Route path="/tablepage" component={TablePage} />
            <Route path="/todopage" component={TodoPage} /> 
          </div> 
          </div>
          </Router>
          <WebsiteFooter className="footer"/> 
        </div>
    );
  }
}

export default App;