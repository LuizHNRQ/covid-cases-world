import React from "react";
import axios from "axios-hooks";

import Header from "../../Containers/Header/header";
import Login from "../../Containers/login/Login";

const Initial = () => {
  const [{ data, loading, error }] = axios({
    url: "https://reqres.in/api/login",
    method: "POST",
    data: { email: "eve.holt@reqres.in", password: "pistol" },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  console.log(data);

  return (
    <div>
      <Header></Header>
      <Login userData={data.data}></Login>
      <div>
        {/* {console.log(data)} */}
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Initial;
