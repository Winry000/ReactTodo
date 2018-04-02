import React, { Component } from 'react';
import './App.css';
import { 
  BrowserRouter as Router, 
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './Components/Navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Navbar/>
        <Route exact path='/' component={Home} />
        <Route path='/contact/:id' component={Contact} />
        <Route path='/about' component={About} />
        </div>
      </Router>
    )
  }
}

export default App;
