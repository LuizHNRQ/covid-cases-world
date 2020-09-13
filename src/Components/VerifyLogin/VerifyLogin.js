import React, { useState } from "react";

import { DivDisplay, DivLogout } from "../../styles";

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
      <DivLogout>
        <Button text="Logout" typebtn="btnRed" onClick={logout}></Button>
      </DivLogout>
    );
  }
  if (props.logged === false) {
    return (
      <DivDisplay>
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
      </DivDisplay>
    );
  }
};

export default VerifyLogin;
