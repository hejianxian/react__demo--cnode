import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css';

import ListWraper from './ListWraper';
import Header from '../../components/Header';

import ListPage from '../ListPage';
import HocCreateList from '../ListPage/HocCreateList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header></Header>
            <ListWraper>
              <Route exact path="/all" component={HocCreateList(ListPage, 'all')}></Route>
              <Route path="/good" component={HocCreateList(ListPage, 'good')}></Route>
              <Route path="/share" component={HocCreateList(ListPage, 'share')}></Route>
              <Route path="/ask" component={HocCreateList(ListPage, 'ask')}></Route>
              <Route path="/jod" component={HocCreateList(ListPage, 'jod')}></Route>
            </ListWraper>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
