import React from "react";
import "./Input.css";
const Input = (props) => {
  return (
    <label className="labelStyle">
      {props.label}
      <input
        {...props}
        className="inputStyle"
        placeholder={props.hint}
        type={props.type}
      ></input>
    </label>
  );
};
export default Input;
