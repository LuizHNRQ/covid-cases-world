import React, { useState, useEffect } from "react";
import axios from "axios";

import { Display, DataGreen, DataRed } from "../../styles";
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
        if (res.status === 200) {
          const r = res.data[0];
          setDataTotal({
            totalConfirm: r.Confirmed,
            totalRecover: r.Recovered,
            totalDeath: r.Deaths,
          });
          console.log("stat->", res.status);
        }
      })
      .catch(function (error) {
        setShowResult(false);
        alert("País Invalido");
      });
    // <-- empty dependency array
  };

  useEffect(() => {
    request("brazil");
    //eslint-disable-next-line
  }, []);

  switch (props.searchType) {
    case "static":
      return (
        <div>
          <Display>
            <p>Casos do Brasil</p>
            <p>Casos Confirmados: {dataTotal.totalConfirm}</p>
            <p>
              <DataGreen>Pacientes Recuperados: </DataGreen>
              {dataTotal.totalRecover}
            </p>
            <p>
              <DataRed>Mortes: </DataRed>
              {dataTotal.totalDeath}
            </p>
          </Display>
        </div>
      );

    case "dynamic":
      return (
        <div>
          {showResult && (
            <Display>
              <p>Casos {country}</p>
              <p>Casos Confirmados: {dataTotal.totalConfirm}</p>
              <p>
                <DataGreen>Pacientes Recuperados: </DataGreen>
                {dataTotal.totalRecover}
              </p>
              <p>
                <DataRed>Mortes: </DataRed>
                {dataTotal.totalDeath}
              </p>
            </Display>
          )}

          <div className="search">
            <Input
              hint="Pesquisa por País..."
              type="text"
              onChange={(e) => setCountry(e.target.value)}
            ></Input>
            <Button
              typebtn="btnGrey"
              text="Pesquisar"
              onClick={() => {
                if (country === "") {
                  alert("O campo não pode ser Vazio!");
                  setShowResult(false);
                  return;
                } else if (country.length <= 3) {
                  alert("Por Favor digite um mais com mais de 3 Caracteres!");
                  setShowResult(false);
                } else {
                  request(country);
                  setShowResult(true);
                }
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
