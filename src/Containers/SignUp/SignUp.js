import React, { useState } from "react";
import axios from "axios";

import { SignUpStyle } from "../../styles";
import Input from "../../Components/Input/Input";

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const efetuarCadastro = () => {
    axios
      .post("https://reqres.in/api/register", user)
      .then(function (response) {
        if ((response.status = 200) && user.password === user.passwordConfirm) {
          window.location.reload();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <SignUpStyle>
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
        hint="Confirme a Senha..."
        type="password"
        label="Senha"
        onChange={(e) => setUser({ ...user, passwordConfirm: e.target.value })}
      ></Input>
      <Input type="submit" value="Cadastrar" onClick={efetuarCadastro}></Input>
    </SignUpStyle>
  );
};

export default SignUp;
