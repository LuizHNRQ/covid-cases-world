import React, { useState } from "react";

import { LoginStyle } from "../../styles";

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
        if (response.status === 200) {
          localStorage.setItem("@covid19/token", response.data.token);
          window.location.reload();
        }
      })
      .catch(function (error) {
        if (user.email.length > 3 && user.password.length > 3) {
          alert("Email ou Senha invalidos");
        }
      });
  };
  const checkData = () => {
    if (user.email === "" && user.password === "") {
      alert("Campo Email e Senha não podem ser vazios");
    } else if (user.email === "") {
      alert("Campo Email não pode ser vazio");
    } else if (user.password === "") {
      alert("Campo Senha não pode ser vazio");
    } else if (user.email.length <= 3) {
      alert("Campo Email não pode ser menor que 4 caracteres");
    } else if (user.password <= 3) {
      alert("Campo Senha não pode ser menor que 4 caracteres");
    }
  };

  return (
    <LoginStyle>
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
      <Input
        type="submit"
        value="Acessar"
        onClick={() => {
          efetuarLogin();
          checkData();
        }}
      ></Input>
    </LoginStyle>
  );
};

export default Login;
