import React from "react";

import Header from "../../Containers/Header/header";
import Body from "../../Containers/Body/Body";

import "./initial.css";

const Initial = () => {
  //verify if the user is logged
  let isLogged = false;
  if (localStorage.getItem("@covid19/token") !== null) {
    isLogged = true;
  }

  //output in console
  console.log("ta logado? ->", isLogged);

  return (
    <div className="background">
      <Header isLogged={isLogged}></Header>
      <Body></Body>
    </div>
  );
};

export default Initial;
