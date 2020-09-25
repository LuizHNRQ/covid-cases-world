import React, { useState } from "react";
import Swal from "sweetalert2";
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
        if (user.email.length > 3 && user.password.length > 3) {
          alert("Email ou Senha invalidos");
        }
      });
  };

  const checkData = () => {
    if (user.email === "" && user.password === "") {
      Swal.fire({
        title: "Campos Invalidos",
        text: "Campo Email e Senha não podem ser vazios",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else if (user.email === "") {
      Swal.fire({
        title: "Email Invalido",
        text: "Campo Email não pode ser vazio",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else if (user.password === "") {
      Swal.fire({
        title: "Senha Invalido",
        text: "Campo Senha não pode ser vazio",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else if (user.email.length <= 3) {
      Swal.fire({
        title: "Email Invalido",
        text: "Campo Email não pode ser menor que 4 caracteres",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else if (user.password <= 3) {
      Swal.fire({
        title: "Senha Invalido",
        text: "Campo Senha não pode ser menor que 4 caracteres",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
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
      <Input
        type="submit"
        value="Cadastrar"
        onClick={() => {
          efetuarCadastro();
          checkData();
        }}
      ></Input>
    </SignUpStyle>
  );
};

export default SignUp;
