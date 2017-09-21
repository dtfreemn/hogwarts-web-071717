import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import HogPen from './HogPen'

class App extends Component {

  render() {
    return (
      <div className="App">
          <Nav />
          <HogPen />
      </div>
    )
  }
}

export default App;

