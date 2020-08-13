import React from "react";
import { useHistory } from "react-router";

export const Home: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      Home
      <button onClick={() => history.push("/login")}>login</button>
    </div>
  );
};
