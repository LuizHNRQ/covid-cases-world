import React from "react";

import { DivContainer, DivDisplayFixed, DivDisplayDynamic } from "../../styles";

import GlobalRequest from "../../data/GlobalRequest/GlobalRequest";
import CountryRequest from "../../data/CountryRequest/CountryRequest";

const Body = (props) => {
  return (
    <DivContainer {...props}>
      <div>
        <DivDisplayFixed>
          <GlobalRequest></GlobalRequest>
          <CountryRequest searchType="static"></CountryRequest>
        </DivDisplayFixed>
        <DivDisplayDynamic>
          <CountryRequest
            searchType="dynamic"
            isLogged={props.isLogged}
          ></CountryRequest>
        </DivDisplayDynamic>
      </div>
    </DivContainer>
  );
};

export default Body;
