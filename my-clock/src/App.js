import React, { Component } from 'react';
import './App.css';
import Clock from './Clock';

class App extends Component {
  constructor() {
    super();
    this.state = {isShowClock: true}
  };
  
  handleShowOrHide() {
    this.setState({
      isShowClock: !this.state.isShowClock
    })
  };

  render(){
    return(
      <div>
        {this.state.isShowClock ? <Clock /> : null}
        <button onClick={this.handleShowOrHide.bind(this)}>Show/Hide</button>
      </div>
    )
  }
}

export default App;
