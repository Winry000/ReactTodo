import React, { Component } from 'react';
import './App.css';

import CommentInput from './CommentInput';
import CommenList from './CommentList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    }
  }
  handleSubmitComment(comment) {
    console.log(comment)
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }
  render() {
    return (
      <div className='wrapper'>
        <h2>Comment Component</h2>
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommenList comments={this.state.comments}/>
      </div>
    )
  };
}

export default App;
