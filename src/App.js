import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SimpleNavbar from './components/navbar/SimpleNavbar';

import LoginPage from './pages/LoginPage';
import TablePage  from './pages/TablePage';
import TodoPage from './pages/TodoPage';
import DragNDropPage from "./pages/DragNDropPage"; 
import CreditCardPage from "./pages/CreditCardPage"; 
import CardListPage from './pages/CardListPage';
import AboutPage from './pages/AboutPage'; 

export default class App extends Component {
  render() {
    return (
        <body>
          <Router basename={process.env.PUBLIC_URL}>
          <div className="wrapper"> 
            <div className="header"> 
              <SimpleNavbar/>
            </div> 
            <div className="content">
                <Route exact path="/" component={LoginPage} />
                <Route path="/tablepage" component={TablePage} />
                <Route path="/todopage" component={TodoPage} />
                <Route path="/cardlistpage" component={CardListPage} /> 
                <Route path="/dragndroppage" component={DragNDropPage} /> 
                <Route path="/creditcardpage" component={CreditCardPage} />
                <Route path="/aboutpage" component={AboutPage} />
            </div>
            <div className="footer">    
              {/* <WebsiteFooter className="footer"/> */}
            </div>          
          </div> 
          </Router>
        </body>
    );
  }
}
