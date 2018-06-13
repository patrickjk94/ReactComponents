import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Table }   from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import TablePage  from './pages/TablePage';
import TodoPage from './pages/TodoPage';
import DragNDropPage from "./pages/DragNDropPage"; 
import CreditCardPage from "./pages/CreditCardPage"; 

import { Provider } from 'react-redux';
import SimpleNavbar from './components/navbar/SimpleNavbar';
import WebsiteFooter from './components/footer/WebsiteFooter';

import CardListPage from './pages/CardListPage';
import DragNDropComponent from './components/drag-n-drop/DragNDropComponent';


class App extends Component {
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
            </div>
            <div class="footer">    
              {/* <WebsiteFooter className="footer"/> */}
            </div>          
          </div> 
          </Router>
        </body>
    );
  }
}

export default App;