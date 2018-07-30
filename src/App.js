import React, { Component } from 'react';
import {connect} from 'react-redux'; 
import './App.css';
import { itemsFetchData } from './actions/table-actions';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import SimpleNavbar from './components/navbar/SimpleNavbar';

import LoginPage from './pages/LoginPage';
import TablePage  from './pages/TablePage';
import TodoPage from './pages/TodoPage';
import DragNDropPage from "./pages/DragNDropPage"; 
import CreditCardPage from "./pages/CreditCardPage"; 
import CardListPage from './pages/CardListPage';
import AboutPage from './pages/AboutPage'; 
import ListPage from './pages/ListPage'; 
import CardList from './components/card-list/CardList';

class App extends Component {

  //Fetch data when the application mounts so that it's only loaded once. 
  componentDidMount() {
    this.props.fetchData('https://full-mern-api.herokuapp.com/getAllPersons');
  }

  render() {
    return (
        <body>
          <Router basename={process.env.PUBLIC_URL}>
          <div className="wrapper"> 
            <div className="header"> 
              <SimpleNavbar/>
            </div> 
            <div className="content">
              <div className="content-right">
                <Route exact path="/" component={LoginPage} />
                <Route path="/tablepage" component={TablePage} />
                <Route path="/todopage" component={TodoPage} />
                <Route path="/cardlistpage" component={CardListPage} /> 
                <Route path="/dragndroppage" component={DragNDropPage} /> 
                <Route path="/creditcardpage" component={CreditCardPage} />
                <Route path="/aboutpage" component={AboutPage} />
                {/* <Route path="/listpage" component={ListPage} />  */}
              </div>
            </div>
            {/* <div className="footer">    
            </div>         */}
          </div> 
          </Router>
        </body>
    );
  }
}

const mapStateToProps = (state) => {
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
