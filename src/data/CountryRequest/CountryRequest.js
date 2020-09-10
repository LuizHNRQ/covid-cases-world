import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../data/DataDisplay.css";

const CountryRequest = (props) => {
  const [dataTotal, setDataTotal] = useState({
    totalConfirm: "",
    totalRecover: "",
    totalDeath: "",
  });

  let today = new Date();
  let yesterday = new Date();
  today.setDate(today.getDate() - 1);
  yesterday.setDate(yesterday.getDate() - 2);

  today = today.toISOString().slice(0, 10);
  yesterday = yesterday.toISOString().slice(0, 10);

  useEffect(() => {
    axios
      .get(
        `https://api.covid19api.com/country/${props.country}?from=${yesterday}T00:00:00Z&to=${today}T00:00:00Z`
      )
      .then((res) => {
        const r = res.data[0];
        setDataTotal({
          totalConfirm: r.Confirmed,
          totalRecover: r.Recovered,
          totalDeath: r.Deaths,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props, today, yesterday]);

  return (
    <div {...props}>
      <div>
        <div className="caseDisplay">
          <p>Casos {props.country}</p>
          <p>Casos Confirmados: {dataTotal.totalConfirm}</p>
          <p>Pacientes Recuperados: {dataTotal.totalRecover}</p>
          <p>Mortes: {dataTotal.totalDeath}</p>
        </div>
      </div>
    </div>
  );
};

export default CountryRequest;
