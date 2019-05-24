import React from 'react';
import Filters from '../Filters'

function Homepage(props) {
  console.log(props.handleInputChange);
  
    return (
      <div className="App">
        <h1>Harry Potter Characters</h1>
        <Filters value={props.value} handleInputChange={props.handleInputChange}/>
      </div>
    );
  }
  
  export default Homepage;