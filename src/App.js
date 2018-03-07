import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [{
        id: 1, name: 'Play golf'
      }, {
        id: 2, name: 'Buy some clothes'
      }, {
        id: 3, name: 'Write some code'
      }, {
        id: 4, name: 'Watch Bahdcasts'
      }]
    };
  }
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
            {this.state.todos.map((item, index) => {
              return <li key={item.id} className="list-group-item">{item.name}</li>
            })}     
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
