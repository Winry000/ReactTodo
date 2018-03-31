import React, { Component } from 'react';
import './App.css';

import Card from './Card';

var b_color = {
  "A": "#2F4B26",
  "B": "#3E885B",
  "C": "#85BDA6",
  "D": "#BEDCFE",
}
class App extends Component {
  constructor() {
		super();
		this.state = {
      list:[[],[],[],[]],
    }
  };
  onSubmit(id, ele) {
    const { list } = this.state;
    list[id].push(ele);
    console.log(list);
  };
  onClickLeft(id, ele) {
    const { list } = this.state;
    const i = Number(id);
    if (i !== 0) {
      const index = list[i].indexOf(ele);
      list[i].splice(index, 1);
      list[i - 1].push(ele);
    }
    console.log(list);
    this.setState({list});
  };
  onClickRight(id, ele) {
    const { list } = this.state;
    const i = Number(id);
    if (i !== 4) {
      const index = list[i].indexOf(ele);
      list[i].splice(index, 1);
      list[i + 1].push(ele);
    }
    console.log(list);
    this.setState({list});
  };

  render() {
    return (
      <div>
        <tr>
          <td><Card name='apple' color={b_color.A} 
           id='0' 
           onClickSubmit={this.onSubmit.bind(this)}
           mlist={this.state.list[0]}
           onClickLeft={this.onClickLeft.bind(this)}
           onClickRight={this.onClickRight.bind(this)}
           /></td>
          <td><Card name='pair' color={b_color.B} id='1'
          onClickSubmit={this.onSubmit.bind(this)} mlist={this.state.list[1]}
          onClickLeft={this.onClickLeft.bind(this)}
          onClickRight={this.onClickRight.bind(this)}
          /></td>
          <td><Card name='cherry' color={b_color.C} id='2'
          onClickSubmit={this.onSubmit.bind(this)} mlist={this.state.list[2]}
          onClickLeft={this.onClickLeft.bind(this)}
          onClickRight={this.onClickRight.bind(this)}
          /></td>
          <td><Card name='coconut' color={b_color.D} id='3'
          onClickSubmit={this.onSubmit.bind(this)} mlist={this.state.list[3]}
          onClickLeft={this.onClickLeft.bind(this)}
          onClickRight={this.onClickRight.bind(this)}
          /></td>
        </tr>
      </div>
    );
  }
}

export default App;
