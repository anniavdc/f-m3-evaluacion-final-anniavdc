import React from "react";

function CharacterCard(props) {
    const { imageSrc, name, house } = props;
  return (
    <div className="CharacterCard__container">
      <img className="CharacterCard__image" src={imageSrc} alt={name}/>
      <h2 className="CharacterCard__title">{name}</h2>
      <p className="CharacterCard__content">{house}</p>
    </div>
  );
}

export default CharacterCard;