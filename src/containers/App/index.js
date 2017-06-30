import React, { Component } from 'react';
import './App.css';

import Header from '../../components/Header';
import Navigator from '../../components/Navigator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Navigator></Navigator>
      </div>
    );
  }
}

export default App;
