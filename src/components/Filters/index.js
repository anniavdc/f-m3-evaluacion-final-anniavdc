import React from "react";
import "./styles.scss";
import PropTypes from "prop-types";
import Input from "../Input";
import InputSelect from "../InputSelect";

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
        label="Year of birth"
        type="number"
        id="house"
        handleInputNumber={props.handleInputNumber}
        value={props.inputNumber}
      />
      <InputSelect
        label="Status"
        value={props.status}
        handleInputSelect={props.handleInputSelect}
        inputStatus={props.inputStatus}
      />
    </div>
  );
}

Filters.propTypes = {
  value: PropTypes.string,
  handleInputChange: PropTypes.func
};

export default Filters;
