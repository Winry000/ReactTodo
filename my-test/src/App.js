import React, { Component } from 'react';
import './App.css';
import Board from './Board.js'



class App extends Component {
  constructor() {
    super();
    this.state = {
      toggle: false,
      name: 'start'
    }
  }
  toggleButton(){
    const { toggle, name } = this.state;
    this.setState({
      toggle : !toggle,
      name : (toggle ? 'Start' : 'End')
    });
  }
  render() {
    return (
      <div className="game">
        <button onClick={this.toggleButton.bind(this)}>{this.state.name}</button>
        { this.state.toggle && 
          (
            <div className="gameboard">
              <Board/>
            </div>
          )
        }
      </div>
    );
  }
}

export default App;
