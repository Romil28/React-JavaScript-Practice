import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>  Hello Romil !</h1>
        <p>WELCOME TO REACT!</p>
        <Person name="Romil" age="21" >My hobbies are: Dancing!</Person>
        <Person name="Mayank" age="22">My hobbies are: NOTHING!</Person>
        <Person name="Saurav" age="27" />
      </div>

    );
  } 
}

export default App;
