import React, { useState } from "react";

import SignUp from "../../Containers/SignUp/SignUp";
import Login from "../../Containers/login/Login";

import Button from "../../Components/Button/Button";

const VerifyLogin = (props) => {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showBtnLogout, setShowBtnLogout] = useState(true);

  function logout() {
    localStorage.removeItem("@covid19/token");
    window.location.reload();
  }

  if (props.logged) {
    return <Button text="Logout" typebtn="btnRed" onClick={logout}></Button>;
  }
  if (props.logged === false) {
    return (
      <div>
        <Button
          text="Cadastrar"
          typebtn="btnRed"
          onClick={() => {
            setShowLogin(false);
            setShowSignUp(true);
          }}
        ></Button>
        {showLogin && <Login></Login>}
        {showSignUp && <SignUp></SignUp>}
      </div>
    );
  }
};

export default VerifyLogin;
