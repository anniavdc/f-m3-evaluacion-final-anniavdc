import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import Input from "../Input";

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
      <Input
        label="Search by house: "
        type="text"
        name="house"
        id="house"
        handleInputHouse={props.handleInputHouse}
        houseValue={props.houseValue}
      />
    </div>
  );
}

Filters.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func
};

export default Filters;
