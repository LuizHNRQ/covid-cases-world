import React from "react";

import "./Body.css";
import GlobalRequest from "../../data/GlobalRequest/GlobalRequest";
import CountryRequest from "../../data/CountryRequest/CountryRequest";

const Body = (props) => {
  return (
    <div {...props} className="container">
      <div className="center">
        <div className="fixInfo">
          <GlobalRequest></GlobalRequest>
          <CountryRequest searchType="static"></CountryRequest>
        </div>
        <div className="dynamicInfo">
          <CountryRequest searchType="dynamic"></CountryRequest>
        </div>
      </div>
    </div>
  );
};

export default Body;
