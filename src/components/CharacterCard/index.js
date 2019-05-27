import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

function CharacterCard(props) {
  const { imageSrc, name, house } = props;
  return (
    <div className="CharacterCard__container">
      <div
        className="CharacterCard__image"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      <h2 className="CharacterCard__title">{name}</h2>
      <p className="CharacterCard__content">{house}</p>
    </div>
  );
}

CharacterCard.propTypes = {
  name: PropTypes.string,
  imageSrc: PropTypes.string,
  house: PropTypes.string
};

export default CharacterCard;
