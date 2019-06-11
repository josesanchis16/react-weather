import React, { Component } from 'react';
import './style.css';
import Nav from './Components/Nav/Nav';
import Header from './Components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Nav />
        <Header />
      </div>
    );
  }
}

export default App;