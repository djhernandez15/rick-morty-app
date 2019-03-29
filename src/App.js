import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      characters: []
    }
  }

  componentDidMount(){
    axios
    .get('https://rickandmortyapi.com/api/character')
    .then(response => {
      this.setState({characters: response.data.results})
    })
  }

  render() {
    let characters = this.state.characters.map((character) => {
      return <div>
        <img src={character.image}></img>
        <h1>{character.name}</h1>
        <h2>{character.species}</h2>
      </div>
    })
    
    
    return (
      <div className="App">
        {characters}
      </div>
    );
  }
}

export default App;
