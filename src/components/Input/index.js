import React from "react"

function Input(props){
    return(
        <div className="Input__container">
            <label htmlFor={props.id}>{props.label}</label>
            <input 
            type={props.type} 
            id={props.id}
            onChange={props.handleInputNumber}
            value={props.value}
            />
        </div>
    )
}

export default Input;