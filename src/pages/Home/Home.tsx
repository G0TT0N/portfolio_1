import React from "react";
import {useHistory} from "react-router";
import axios from "axios";

export const Home: React.FC = () => {
  const history = useHistory();

  const test = () => {
    axios
      .post("/auth/register", {
        email: "test2@mail.ru",
        password: "123",
      })
      .then((res) => console.log("000000000000000000", res));
  };
  return (
    <div>
      Home
      <button onClick={() => history.push("/login")}>login</button>
      <button onClick={test}>axios</button>
    </div>
  );
};
