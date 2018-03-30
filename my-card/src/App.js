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
  render() {
    return (
      <div>
        <tr>
          <td><Card name='apple' color={b_color.A}/></td>
          <td><Card name='pair' color={b_color.B}/></td>
          <td><Card name='cherry' color={b_color.C}/></td>
          <td><Card name='coconut' color={b_color.D}/></td>
        </tr>
      </div>
    );
  }
}

export default App;
