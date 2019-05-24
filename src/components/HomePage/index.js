import React from 'react';
import Filters from '../Filters';
import CharacterList from '../CharacterList';

function Homepage(props) {
    return (
      <div className="Homepage__container">
        <h1 className="Homepage__title">Harry Potter Characters</h1>
        <Filters 
        value={props.value} 
        handleInputChange={props.handleInputChange}/>
        <CharacterList 
        characters={props.characters}
        value={props.value}/>
      </div>
    );
  }
  
  export default Homepage;