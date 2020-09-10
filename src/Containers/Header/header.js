import React from "react";

import "./header.css";

import DisplayComponents from "../../Components/VerifyLogin/VerifyLogin";

const Header = (props) => {
  return (
    <div className="header">
      <div className="text">Casos de Covid 19 no Mundo</div>
      <div>
        <DisplayComponents logged={props.isLogged}></DisplayComponents>
      </div>
    </div>
  );
};

export default Header;
