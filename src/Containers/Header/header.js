import React, { useState } from "react";

import "./header.css";

import DisplayComponents from "../../Components/VerifyLogin/VerifyLogin";

import Button from "../../Components/Button/Button";

const Header = () => {
  let isLogged = false;
  if (localStorage.getItem("@covid19/token") != undefined) {
    isLogged = true;
  }

  console.log("ta logado? ->", isLogged);

  return (
    <div className="header">
      <div className="text">Casos de Covid 19 no Mundo</div>
      <div>
        <DisplayComponents logged={isLogged}></DisplayComponents>
      </div>
    </div>
  );
};

export default Header;
