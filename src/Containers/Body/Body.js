import React, { useState } from "react";

import "./Body.css";
import GlobalRequest from "../../data/GlobalRequest/GlobalRequest";
import CountryRequest from "../../data/CountryRequest/CountryRequest";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

const Body = (props) => {
  const [country, setCountry] = useState("");
  const [showResult, setShowResult] = useState(false);

  const search = () => {
    setShowResult(true);
  };

  const request = <CountryRequest country={country}></CountryRequest>;

  return (
    <div {...props} className="container">
      <div>
        <GlobalRequest></GlobalRequest>
        <CountryRequest country="brazil"></CountryRequest>
      </div>
      <div>
        {showResult && request}
        <Input
          hint="Pesquisa por País..."
          type="text"
          label="País"
          onChange={(e) => setCountry(e.target.value)}
        ></Input>
        <Button typebtn="btnGrey" text="Pesquisar" onClick={search} />
      </div>
    </div>
  );
};

export default Body;
