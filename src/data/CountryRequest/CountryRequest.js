import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../data/DataDisplay.css";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

const CountryRequest = (props) => {
  const [country, setCountry] = useState("");
  const [dataTotal, setDataTotal] = useState({
    totalConfirm: "",
    totalRecover: "",
    totalDeath: "",
  });
  const [showResult, setShowResult] = useState(false);

  const search = () => {
    setShowResult(true);
  };

  let today = new Date();
  let yesterday = new Date();
  today.setDate(today.getDate() - 1);
  yesterday.setDate(yesterday.getDate() - 2);

  today = today.toISOString().slice(0, 10);
  yesterday = yesterday.toISOString().slice(0, 10);

  const request = async (country) => {
    await axios
      .get(
        `https://api.covid19api.com/country/${country}?from=${yesterday}T00:00:00Z&to=${today}T00:00:00Z`
      )
      .then((res) => {
        const r = res.data[0];
        console.log(r);
        setDataTotal({
          totalConfirm: r.Confirmed,
          totalRecover: r.Recovered,
          totalDeath: r.Deaths,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    // <-- empty dependency array
  };

  useEffect(() => {
    request("brazil"); //eslint-disable-next-line
  }, []);

  switch (props.searchType) {
    case "static":
      return (
        <div>
          <div className="caseDisplay">
            <p>Casos do Brasil</p>
            <p>Casos Confirmados: {dataTotal.totalConfirm}</p>
            <p>Pacientes Recuperados: {dataTotal.totalRecover}</p>
            <p>Mortes: {dataTotal.totalDeath}</p>
          </div>
        </div>
      );

    case "dynamic":
      return (
        <div>
          {showResult && (
            <div className="caseDisplay">
              <p>Casos {country}</p>
              <p>Casos Confirmados: {dataTotal.totalConfirm}</p>
              <p>Pacientes Recuperados: {dataTotal.totalRecover}</p>
              <p>Mortes: {dataTotal.totalDeath}</p>
            </div>
          )}

          <div className="search">
            <Input
              hint="Pesquisa por País..."
              type="text"
              label="País"
              onChange={(e) => setCountry(e.target.value)}
            ></Input>
            <Button
              typebtn="btnGrey"
              text="Pesquisar"
              onClick={() => {
                request(country);
                search();
              }}
            />
          </div>
        </div>
      );

    default:
      return <></>;
  }
};

export default CountryRequest;
