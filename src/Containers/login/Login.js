import React from "react";

import "./Login.css";

import Input from "../../Components/Input/Input";

const Login = () => {
  return (
    <div className="login">
      <Input hint="Digite seu email..." type="email" label="email"></Input>
      <Input hint="Senha..." type="password" label="Senha"></Input>
      <Input type="submit" value="Acessar"></Input>
    </div>
  );
};

export default Login;
