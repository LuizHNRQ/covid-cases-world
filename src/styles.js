import styled from "styled-components";

//Input.js page
export const InputCustom = styled.input`
  padding: 10px;
  border-radius: 5px;
  font-size: 18px;
  border: 1px solid gray;
  margin: 5px;
`;

export const LabelStyle = styled.label`
  font-size: 26px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

//Header.js page
export const HeaderCustom = styled.div`
  background-color: rgb(104, 104, 179);
  border-bottom: 10px solid black;
  display: flex;
  justify-content: center;
  max-height: 320px;
  height: 300px;
  padding: 0 20px 0 20px;

  h1 {
    font-size: 80px;
    color: white;
    font-weight: 600;
  }
`;

//VerifyLogin.js page
export const DivDisplay = styled.div`
  text-align: center;
  padding: 20px;
`;
export const DivLogout = styled.div`
  display: flex;
  justify-content: flex-end;
`;

//Body.js page
export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: rgb(130, 140, 155); */
  background-color: rgb(198, 188, 230);
`;
export const DivDisplayFixed = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const DivDisplayDynamic = styled.div`
  display: flex;
  justify-content: center;
`;

//SignUp.js page
export const SignUpStyle = styled.div`
  background-color: rgb(55, 55, 117);
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 10px;
  margin-left: 20px;
  border-radius: 5px;
`;

//Login.js page
export const LoginStyle = styled.div`
  background-color: rgb(118, 118, 167);

  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 10px;
  margin-left: 20px;
  border-radius: 5px;
`;

//--- DATA DISPLAY ---
export const Display = styled.div`
  height: 200px;
  width: 320px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  margin: 20px;
  padding: 20px;
  font-size: 18px;

  p:first-child {
    border-bottom: 2px solid black;
    display: flex;
    justify-content: center;
    font-size: 22px;
    padding-bottom: 5px;
  }
`;

export const DataGreen = styled.span`
  color: green;
`;
export const DataRed = styled.span`
  color: red;
`;
