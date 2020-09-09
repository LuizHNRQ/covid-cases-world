import React, { useState } from "react";

import "./Login.css";

import axios from "axios-hooks";

import Input from "../../Components/Input/Input";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [{ data, loading, error }] = axios({
    url: "https://reqres.in/api/login",
    method: "POST",
    data: { email: "eve.holt@reqres.in", password: "pistol" },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  const submitCredential = () => {
    const userCredential = {
      email: email,
      password: password,
    };
    verifyCredential(userCredential);
  };

  const verifyCredential = (user) => {
    console.log(user);
    console.log(props.userData);

    props.userData.map((element) => {
      if (user.email === element.email) {
        console.log("pode entrar no meu sistema ai fera");
      }
    });
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
