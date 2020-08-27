import React from "react";
import "./Home.scss";
import {FilterBlock} from "./FilterBlock/FilterBlock";

export const Home: React.FC = () => {
  return (
    <div className='app__wrapper site-drawer-render-in-current-wrapper'>
      <FilterBlock />
    </div>
  );
};
