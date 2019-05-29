import React from "react";

function InputSelect(props){
    return (
        <div className="InputSelect__container">
            <label htmlFor={props.id}>{props.label}</label>
            <select name="status" id="status" value={props.inputStatus} onChange={props.handleInputSelect}>
                <option value="true">Alive</option>
                <option value="false">Dead</option>
                <option value="">All</option>
            </select>
        </div>
    )
}

export default InputSelect;