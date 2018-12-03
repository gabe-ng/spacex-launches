import React, { Component } from 'react';
import './App.css';
import Logo from './spacexlogo.png';
import { Z_BLOCK } from 'zlib';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img 
          src={Logo} 
          alt="SpaceX" 
          style={{ width: 300, display: 'block', margin: 'auto' }} 
        />
      </div>
    );
  }
}

export default App;
