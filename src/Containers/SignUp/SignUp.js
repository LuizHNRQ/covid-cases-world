import React from "react";

import "./SignUp.css";

import Input from "../../Components/Input/Input";

const SignUp = () => {
  return (
    <div className="signup">
      <Input hint="Digite seu email..." type="email" label="email"></Input>
      <Input hint="Senha..." type="password" label="Senha"></Input>
      <Input hint="Confirme a Senha..." type="password" label="Senha"></Input>
      <Input type="submit" value="Acessar"></Input>
    </div>
  );
};

export default SignUp;
