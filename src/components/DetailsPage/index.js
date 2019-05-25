import React from "react";
import howarts from "../../images/howarts.png";
import "./styles.css";

function DetailsPage(props) {
  const { characters, loading } = props;
  const { id } = props.match.params;
 
  const person = characters.find(person => {
    return person.id === parseInt(id)
  });

  if (loading) {
    return <p>Loading...</p>;
  }
  const status = person.alive? 'ALIVE' : 'DEAD';
  const year = person.dateOfBirth.split('-');
  
  return (
    <div
      className="DetailsPage__container"
      style={{ backgroundImage: `url(${howarts})` }}
    >
      <div className="DetailsPage__card">
        <div
          className="DetailsPage__image"
          style={{ backgroundImage: `url(${person.image})` }}
        />
        <div>
          <h2 className="DetailsPage__title">{person.name}</h2>
          <p className="DetailsPage__content">House: {person.house}</p>
          <p className="DetailsPage__content">Year of birth: {year[2]}</p>
          <p className="DetailsPage__content">Patronus: {person.patronus}</p>
          <p className="DetailsPage__content">Status: {status}</p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
