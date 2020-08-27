import "./HeaderBottom.scss";
import React from "react";
import {Input} from "antd";
import {useHistory} from "react-router-dom";
import logo from "Media/img/bull_logo.png";
import {HeartOutlined, ShoppingCartOutlined} from "@ant-design/icons";

export const HeaderBottom: React.FC = () => {
  const history = useHistory();

  const searchHandler = (value: string) => {
    console.log("000000000000000000", value);
  };

  return (
    <div className='header_bottom'>
      <div className='header_bottom__logo-container'>
        <img src={logo} alt='logo' onClick={() => history.push("/")} />
        <p>
          <span>BULL</span> EAT
        </p>
      </div>
      <Input.Search
        onSearch={searchHandler}
        size='large'
        className='header_bottom__search-input'
        placeholder='Search in the catalog'
      />
      <div className='header_bottom__control-icons'>
        <HeartOutlined />
        <ShoppingCartOutlined />
      </div>
    </div>
  );
};
