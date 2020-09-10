import React, { useState } from "react";

import "./Login.css";

import axios from "axios";
import Input from "../../Components/Input/Input";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const efetuarLogin = (user) => {
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

  const submitCredential = () => {
    const userCredential = {
      email: email,
      password: password,
    };
    efetuarLogin(userCredential);
    console.log(userCredential);
  };

  return (
    <div className="login">
      <Input
        hint="Digite seu email..."
        type="email"
        label="email"
        onChange={(e) => setEmail(e.target.value)}
      ></Input>
      <Input
        hint="Senha..."
        type="password"
        label="Senha"
        onChange={(e) => setPassword(e.target.value)}
      ></Input>
      <Input type="submit" value="Acessar" onClick={submitCredential}></Input>
    </div>
  );
};

export default Login;
