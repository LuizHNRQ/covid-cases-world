import React, { useState } from "react";

import "./VerifyLogin.css";

import SignUp from "../../Containers/SignUp/SignUp";
import Login from "../../Containers/login/Login";

import Button from "../../Components/Button/Button";

const VerifyLogin = (props) => {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);

  function logout() {
    localStorage.removeItem("@covid19/token");
    window.location.reload();
  }

  if (props.logged) {
    return (
      <div className="logout">
        <Button text="Logout" typebtn="btnRed" onClick={logout}></Button>
      </div>
    );
  }
  if (props.logged === false) {
    return (
      <div className="display">
        {showLogin && (
          <Button
            text="Cadastrar"
            typebtn="btnRed"
            onClick={() => {
              setShowLogin(false);
              setShowSignUp(true);
            }}
          ></Button>
        )}
        {showSignUp && (
          <Button
            text="Login"
            typebtn="btnGreen"
            onClick={() => {
              setShowLogin(true);
              setShowSignUp(false);
            }}
          ></Button>
        )}
        {showLogin && <Login></Login>}
        {showSignUp && <SignUp></SignUp>}
      </div>
    );
  }
};

export default VerifyLogin;
