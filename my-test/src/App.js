import React, { Component } from 'react';
import './App.css';
import Board from './Board.js'

class App extends Component {
  render() {
    return (
      <div className="game">
        <div className="gameboard">
          <Board/>
        </div>
      </div>
    );
  }
}

export default App;
