import React from 'react';

function Filters(props) {
    return (
      <div className="App">
        <label htmlFor="name" className="hidden">Name</label>
        <input type="text" id="name" value={props.value} onChange={props.handleInputChange}/>
      </div>
    );
  }
  
  export default Filters;