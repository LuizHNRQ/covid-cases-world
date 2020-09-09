import React, { useState } from "react";

import "./header.css";

import SignUp from "../../Containers/SignUp/SignUp";

import Button from "../../Components/Button/Button";

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="header">
      <div className="text">Casos de Covid 19 no Mundo</div>
      <div>
        <Button
          text="Cadastrar"
          typebtn="btnRed"
          onClick={() => setShowSignUp(!showSignUp)}
        />
        <Button
          text="Login"
          typebtn="btnGreen"
          onClick={() => setShowLogin(!showLogin)}
        />
      </div>
      {showSignUp && <SignUp></SignUp>}
    </div>
  );
};

export default Header;
