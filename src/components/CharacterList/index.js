import React from "react";
import CharacterCard from "../CharacterCard";

function CharacterList(props) {
  const { characters } = props;
  return (
    <ul className="CharacterList__container">
      {characters.map((person, index) => (
        <li className="CharacterList__item" key={index}>
          <CharacterCard
            name={person.name}
            imageSrc={person.image}
            house={person.house}
          />
        </li>
      ))}
    </ul>
  );
}

export default CharacterList;
