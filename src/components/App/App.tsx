import React from "react";
import "./App.scss";
import { test } from "../test";

export const App = () => {
  const foo = () => {};
  return (
    <div className='app__wrapper'>
      <p>{test()}</p>
      <img src='media/img/city.jpg' alt='city' />
    </div>
  );
};
