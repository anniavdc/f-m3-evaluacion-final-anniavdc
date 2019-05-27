import React from "react";
import CharacterCard from "../CharacterCard";
import { Link } from "react-router-dom";
import "./styles.scss";

function CharacterList(props) {
  const { characters, value } = props;
  return (
    <ul className="CharacterList__container">
      {characters
        .filter(person => person.name.toLowerCase().includes(value.toLowerCase()))
        .map((person) => (
          <Link to= {`/character/${person.id}`} className="CharacterList__link" key={person.id}>
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

export default CharacterList;
