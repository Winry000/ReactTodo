import React, { Component } from 'react';
import './App.css';

import SingleTodo from './SingleTodo.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: [],
      currentTodo: ""
    };
  }
  onInputChange = e => {
    this.setState ({
      currentTodo : e.target.value
    });
  }
  onAdd = () => {
    const { todos, currentTodo } = this.state;
    let toDoCopy = todos.slice()
    toDoCopy.push(currentTodo);
    this.setState({todos: toDoCopy, currentTodo: ""});
  }
  onDelete = i => {
    let toDoCopy = this.state.todos.slice();
    toDoCopy.splice(i,1);
    this.setState({todos: toDoCopy});
  }
  render(){
    let todoList = this.state.todos.map((e, i) => {
      return (
        <SingleTodo todo={e} delete={() => this.onDelete(i)}/>
      );
    });
    return(
      <div>
        <input placeholder="Enter todo list" value={this.state.currentTodo} onChange={this.onInputChange} />
        <button onClick={this.onAdd}>Add!</button>
        <br />
        {this.state.todos.length === 0 ? "you don't have todo" : <ul>{todoList}</ul>}
      </div>
    );
  }
}

export default App;
