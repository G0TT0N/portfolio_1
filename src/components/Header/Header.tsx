import "./Header.scss";
import React from "react";
import {EnvironmentOutlined, UserOutlined} from "@ant-design/icons";
import {useSelector} from "react-redux";
import {appReduxState} from "../../interfaces/appReduxState";
import {NavLink} from "react-router-dom";

export const Header: React.FC = () => {
  const town = useSelector((state: appReduxState) => state.app.town);
  return (
    <div className='header__top'>
      <div className='header__top__town'>
        <EnvironmentOutlined />
        <p>{town}</p>
      </div>
      <nav className='header__top__menu'>
        <ul>
          <li>
            <NavLink to={"/delivery"}>Доставка и оплата</NavLink>
          </li>
          <li>
            <NavLink to={"/contacts"}>Магазины</NavLink>
          </li>
          <li>
            <UserOutlined /> <span>Войти</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};
