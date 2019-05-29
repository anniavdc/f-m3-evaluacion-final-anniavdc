import React from "react";
import "./styles.scss"
import PropTypes from "prop-types";

function Input(props) {
    return(
       <div className="Input__container">
            <label htmlFor={props.id}>{props.label}</label>
            <input 
            type={props.type} 
            name={props.name} 
            id={props.id}
            value={props.houseValue}
            onChange={props.handleInputHouse}
            />
       </div>
    )
}


export default Input;