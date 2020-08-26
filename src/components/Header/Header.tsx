import "./Header.scss";
import React from "react";
import {HeaderTop} from "./HeaderTop/HeaderTop";
import {HeaderBottom} from "./HeaderBottom/HeaderBottom";

export const Header: React.FC = () => {
  return (
    <div className='header__wrapper'>
      <HeaderTop />
      <hr className='app__hr' />
      <HeaderBottom />
      <hr className='app__hr' />
    </div>
  );
};
