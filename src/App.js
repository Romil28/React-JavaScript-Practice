import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Romil', age: 21 },
      { name: 'Mayank', age: 22 },
      { name: 'Saurav', age: 27 }
    ]
  }

  SwitchNameHandler = () => {

    this.setState({

      persons: [
        { name: 'Romil Shah', age: 22 },
        { name: 'Mayank Mehta', age: 22 },
        { name: 'Saurav', age: 28 }
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>  Hello Romil !</h1>
        <p>WELCOME TO REACT!</p>
        <button onClick={this.SwitchNameHandler}> Switch Name </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >My hobbies are: Dancing!</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies are: NOTHING!</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>

    );
  } 
}

export default App;
