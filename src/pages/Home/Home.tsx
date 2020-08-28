import React from "react";
import "./Home.scss";
import {FilterBlock} from "./FilterBlock/FilterBlock";

export const Home: React.FC = () => {
  return (
    <div className='app__wrapper home__wrapper'>
      <FilterBlock />
    </div>
  );
};
