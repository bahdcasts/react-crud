import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
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

    this.addTodo = this.addTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  addTodo() {
    const newTodo = {
      name: this.state.newTodo,
      id: this.state.todos[this.state.todos.length - 1].id + 1
    };

    const todos = this.state.todos;
    todos.push(newTodo);

    this.setState({
      todos: todos,
      newTodo: ''
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">CRUD React</h1>
        </header>
        <div className="container">
          <input
            type="text"
            name="todo"
            className="my-4 form-control"
            placeholder="Add a new todo"
            onChange={this.handleChange}
            value={this.state.newTodo}
          />
          <button
            onClick={this.addTodo}
            className="btn-info mb-3 form-control">
            Add todo
          </button>
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
