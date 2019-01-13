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

  switchNameHandler = (newName) => {

    this.setState({

      persons: [
        { name: newName, age: 22 },
        { name: 'Mayank Mehta', age: 22 },
        { name: 'Saurav', age: 28 }
      ]
    } )
  }

  nameChangedHandler = (event) => {

    this.setState({

      persons: [
        { name: 'Romil', age: 22 },
        { name: event.target.value , age: 22 },
        { name: 'Saurav', age: 27 }
      ]
    } ) 

  }

  render() {
    return (
      <div className="App">
        <h1>  Hello Romil !</h1>
        <p>WELCOME TO REACT!</p>
        <button onClick={() => this.switchNameHandler('Romil M Shah')}> Switch Name </button>
        
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}> My hobbies are: Dancing!</Person>
        
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        press={this.switchNameHandler.bind(this, 'Chacha')}
        changed={this.nameChangedHandler}>My hobbies are: NOTHING!</Person>
        
        <Person name={this.state.persons[2].name} 
        age={this.state.persons[2].age} />

      </div>

    );
  } 
}

export default App;
