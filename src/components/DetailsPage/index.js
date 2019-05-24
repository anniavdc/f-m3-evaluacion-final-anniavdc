import React from "react";
import "./styles.css";

function DetailsPage(props) {
    const { characters, loading } = props;
    const { id } = props.match.params;
    const person = characters[id - 1];

    if(loading){
        return <p>Loading...</p>
    }
  return (
    <div className="DetailsPage__container">
      <div className="DetailsPage__image" style={{ backgroundImage: `url(${person.image})` }}/>
      <h2 className="DetailsPage__title">{person.name}</h2>
      <p className="DetailsPage__content">{person.house}</p>
    </div>
  );
}

export default DetailsPage;