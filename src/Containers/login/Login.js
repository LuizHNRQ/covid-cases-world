import React, { useState } from "react";

import "./Login.css";

import axios from "axios";
import Input from "../../Components/Input/Input";

const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const efetuarLogin = () => {
    axios
      .post("https://reqres.in/api/login", user)
      .then(function (response) {
        console.log(response);
        console.log(response.data.token);
        if ((response.status = 200)) {
          localStorage.setItem("@covid19/token", response.data.token);
          window.location.reload();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="login">
      <Input
        hint="Digite seu email..."
        type="email"
        label="email"
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      ></Input>
      <Input
        hint="Senha..."
        type="password"
        label="Senha"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      ></Input>
      <Input type="submit" value="Acessar" onClick={efetuarLogin}></Input>
    </div>
  );
};

export default Login;
