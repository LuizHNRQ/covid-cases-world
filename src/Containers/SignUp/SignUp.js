import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";

import Input from "../../Components/Input/Input";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const efetuarCadastro = (user) => {
    axios
      .post("https://reqres.in/api/register", user)
      .then(function (response) {
        if ((response.status = 200)) {
          window.location.reload();
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const submitCredential = () => {
    if (password === passwordConfirm) {
      const userCredential = {
        email: email,
        password: password,
      };
      efetuarCadastro(userCredential);
    } else {
      console.log("implementar erro de validação");
    }
  };

  return (
    <div className="signup">
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
      <Input
        hint="Confirme a Senha..."
        type="password"
        label="Senha"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      ></Input>
      <Input type="submit" value="Cadastrar" onClick={submitCredential}></Input>
    </div>
  );
};

export default SignUp;
