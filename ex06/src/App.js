import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';

class App extends Component {
    state = {
      characters: [],
    };
    
    hadleSubmit =(character) => {
      this.setState({ characters: [...this.state.characters, character]});
    };

  
    removeCharacter = (index) => {
      const { characters } = this.state;
      this.setState({
        characters: characters.filter((character, i) => {
          return i !== index;
        }),
      });
    };
  
    render() {
      const { characters } = this.state;
      return (
        <div className="container">
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
          <Form hadleSubmit={this.hadleSubmit} />
        </div>

      );
    }
  }
  
  export default App;