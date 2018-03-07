import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CRUD React</h1>
        </header>
        <div className="container">
          <h2 className="text-center p-4">Todos App</h2>
          <ul className="list-group">
            <li className="list-group-item">BUY SOME CLOTHES</li>
            <li className="list-group-item">WRITE SOME CODE</li>
            <li className="list-group-item">WATCH BAHDCASTS</li>                        
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
