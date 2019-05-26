import React from "react";
import CharacterCard from "../CharacterCard";
import { Link } from "react-router-dom";
import "./styles.css";

function CharacterList(props) {
  const { characters, value } = props;
  return (
    <ul className="CharacterList__container">
      {characters
        .filter(person => person.name.includes(value))
        .map((person) => (
          <Link to= {`/character/${person.id}`} className="CharacterList__link">
            <li className="CharacterList__item" key={person.id}>
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

export default CharacterList;
