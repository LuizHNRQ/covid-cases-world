import React from "react";
import { InputCustom, LabelStyle } from "../../styles";

const Input = (props) => {
  return (
    <LabelStyle>
      {props.label}
      <InputCustom
        {...props}
        placeholder={props.hint}
        type={props.type}
      ></InputCustom>
    </LabelStyle>
  );
};
export default Input;
