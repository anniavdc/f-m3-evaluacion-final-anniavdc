import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";

function Filters(props) {
  return (
    <div className="Filters__container">
      <label htmlFor="name" className="Filters__label-text">
        Search by name:{" "}
      </label>
      <input
        className="Filters__input-text"
        type="text"
        id="name"
        value={props.value}
        onChange={props.handleInputChange}
      />
      <label htmlFor="gryffindor">Gryffindor</label>
      <input
        className="Filters__input-checkbox"
        type="checkbox"
        id="gryffindor"
        name="house-options"
        value="gryffindor"
        onChange={props.handleInputCheckboxChange}
      />
      <label htmlFor="slytherin">Slytherin</label>
      <input
        className="Filters__input-checkbox"
        type="checkbox"
        id="slytherin"
        name="house-options"
        value="slytherin"
        onChange={props.handleInputCheckboxChange}
      />
      <label htmlFor="hufflepuff">Hufflepuff</label>
      <input
        className="Filters__input-checkbox"
        type="checkbox"
        id="hufflepuff"
        name="house-options"
        value="hufflepuff"
        onChange={props.handleInputCheckboxChange}
      />
      <label htmlFor="hufflepuff">Ravenclaw</label>
      <input
        className="Filters__input-checkbox"
        type="checkbox"
        id="ravenclaw"
        name="house-options"
        value="ravenclaw"
        onChange={props.handleInputCheckboxChange}
      />
      <label htmlFor="alive">Alive</label>
      <input
        className="Filters__input-checkbox"
        type="radio"
        id="alive"
        name="life-status"
        value="true"
        onChange={props.handleInputRadioChange}
      />
       <label htmlFor="alive">Dead</label>
      <input
        className="Filters__input-checkbox"
        type="radio"
        id="dead"
        name="life-status"
        value="false"
        onChange={props.handleInputRadioChange}
      />
    </div>
  );
}

Filters.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func,
  handleInputCheckboxChange: PropTypes.func
};

export default Filters;
