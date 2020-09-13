import React, { useState, useEffect } from "react";

import Header from "../../Containers/Header/header";
import Body from "../../Containers/Body/Body";

import "./initial.css";

const Initial = () => {
  //verify if the user is logged
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("@covid19/token") !== null) {
      setLogged(true);
    }
  }, []);

  const allowClick = () => {
    if (logged === false) {
      alert("Por favor, faça o login antes de Continuar");
    }
  };

  //output in console
  console.log("ta logado? ->", logged);

  return (
    <div>
      <Header isLogged={logged}></Header>
      <Body onClick={allowClick}></Body>
    </div>
  );
};

export default Initial;
