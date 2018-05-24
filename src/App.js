import React, { Component } from 'react';
import logo from './logo.svg';
import { Table }   from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TablePage  from './pages/TablePage';
import TodoPage from './pages/TodoPage';
import { Provider } from 'react-redux';
import SimpleNavbar from './components/SimpleNavbar';
import WebsiteFooter from './components/WebsiteFooter';
import WebsiteHeader from './components/WebsiteHeader'; 

import './App.css';
import CardListPage from './pages/CardListPage';

class App extends Component {
  render() {
    return (
        <body>
          <Router basename={process.env.PUBLIC_URL}>
          <div className="wrapper"> 
            <div className="header"> 
              <WebsiteHeader/>
              <SimpleNavbar/>
            </div> 
            <div className="content">
                <Route exact path="/" component={LoginPage} />
                <Route path="/tablepage" component={TablePage} />
                <Route path="/todopage" component={TodoPage} />
                <Route path="/cardlistpage" component={CardListPage} /> 
            </div>
            <div class="footer">    
              <WebsiteFooter className="footer"/>
            </div>          
          </div> 
          </Router>
        </body>
    );
  }
}

export default App;