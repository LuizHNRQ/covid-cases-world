import React, { useState, useEffect } from "react";
import axios from "axios";

import "../../data/DataDisplay.css";

const GlobalRequest = (props) => {
  const [dataTotal, setDataTotal] = useState({
    totalConfirm: "",
    totalRecover: "",
    totalDeath: "",
  });

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        setDataTotal({
          totalConfirm: res.data.Global.TotalConfirmed,
          totalRecover: res.data.Global.TotalRecovered,
          totalDeath: res.data.Global.TotalDeaths,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div {...props}>
      <div>
        <div className="caseDisplay">
          <p>Casos Globais</p>
          <p>Casos Confirmados: {dataTotal.totalConfirm}</p>
          <p>Pacientes Recuperados: {dataTotal.totalRecover}</p>
          <p>Mortes: {dataTotal.totalDeath}</p>
        </div>
      </div>
    </div>
  );
};

export default GlobalRequest;
