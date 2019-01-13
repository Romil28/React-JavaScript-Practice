import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>  Romil - The Gangstu</h1>
        <p>Gangstu is an anonymous word which can be defined by anyone</p>
        <Person name="Romil" age="21" />
        <Person name="Mayank" age="22">My hobbies are: NOTHING!</Person>
        <Person name="Saurav" age="27" />
      </div>
    );
  } 
}

export default App;
