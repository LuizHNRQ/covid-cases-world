import React, { useState } from "react";

import "./header.css";

import Login from "../../Containers/login/Login";
import SignUp from "../../Containers/SignUp/SignUp";

import Button from "../../Components/Button/Button";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="header">
      <text className="text">Casos de Covid 19 no Mundo</text>
      <div>
        <Button
          text="Cadastrar"
          typeButton="btnRed"
          onClick={() => setShowSignUp(!showSignUp)}
        />
        <Button
          text="Login"
          typeButton="btnGreen"
          onClick={() => setShowLogin(!showLogin)}
        />
      </div>
      {showLogin && <Login></Login>}
      {showSignUp && <SignUp></SignUp>}
    </div>
  );
};

export default Header;
