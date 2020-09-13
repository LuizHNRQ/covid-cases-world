import React, { useState, useEffect } from "react";
import axios from "axios";

import { Display, DataGreen, DataRed } from "../../styles";

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
        <Display>
          <p>Casos Globais</p>
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
    </div>
  );
};

export default GlobalRequest;
