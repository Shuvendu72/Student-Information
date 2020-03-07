import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import MainPanal from './components/MainPanel/MainPanal';

class App extends Component {
 
  render() {
    return (
      <div className="App">
        <MainPanal/>
      </div>
    );
  }
}

export default App;
