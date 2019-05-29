import React from "react";
import CharacterCard from "../CharacterCard";
import { Link } from "react-router-dom";
import "./styles.scss";
import PropTypes from "prop-types";

function CharacterList(props) {
  const { characters, value, inputNumber, inputStatus } = props;
  const status = inputStatus === "true"? true: false;
  return (
    <ul className="CharacterList__container">
      {characters
        .filter(person =>
          person.name.toLowerCase().includes(value.toLowerCase())
        )
        .filter(person => inputNumber? person.wand.length <= parseFloat(inputNumber): true)
        // .filter(person => inputNumber? person.yearOfBirth >= parseInt(inputNumber): true)
        .filter(person => inputStatus?person.alive === status : person)
        .map(person => (
          <Link
            to={`/character/${person.id}`}
            className="CharacterList__link"
            key={person.id}
          >
            <li className="CharacterList__item">
              <CharacterCard
                name={person.name}
                imageSrc={person.image}
                house={person.house}
              />
            </li>
          </Link>
        ))}
    </ul>
  );
}

CharacterList.propTypes = {
  name: PropTypes.string,
  imageSrc: PropTypes.string,
  house: PropTypes.string,
  id: PropTypes.number
};

export default CharacterList;
