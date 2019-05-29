import React from "react";
import "./styles.scss";
import Filters from "../Filters";
import CharacterList from "../CharacterList";
import PropTypes from "prop-types";
import background from "../../images/background8.jpg";

function Homepage(props) {
  return (
    <div
      className="Homepage__container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="Homepage__title">Harry Potter Characters</h1>
      <Filters
        value={props.value}
        handleInputChange={props.handleInputChange}
        handleInputHouse={props.handleInputHouse}
        houseValue={props.houseValue}
      />
      <CharacterList
        characters={props.characters}
        value={props.value}
        houseValue={props.houseValue}
      />
    </div>
  );
}

Homepage.propTypes = {
  value: PropTypes.string,
  characters: PropTypes.arrayOf(PropTypes.object),
  handleInputChange: PropTypes.func
};

export default Homepage;
