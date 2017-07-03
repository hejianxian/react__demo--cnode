import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import './App.css';

import ListWraper from './ListWraper';
import Header from '../../components/Header';
import Navigator from '../../components/Navigator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header></Header>
            <Navigator></Navigator>
            <ListWraper>
              <Route exact path="/all" component={()=>(<div><h2>All</h2></div>)}></Route>
              <Route path="/good" component={()=>(<div><h2>Good</h2></div>)}></Route>
              <Route path="/share" component={()=>(<div><h2>Share</h2></div>)}></Route>
              <Route path="/ask" component={()=>(<div><h2>Ask</h2></div>)}></Route>
              <Route path="/jod" component={()=>(<div><h2>Jod</h2></div>)}></Route>
            </ListWraper>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
