import React from 'react';
import './App.css';
import {Heart} from '../src/components/heart';

function App() {
  return (
    <div className="App">
      
      <a
        className="App-link"
        href="/"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <Heart />
    </div>
  );
}

export default App;
