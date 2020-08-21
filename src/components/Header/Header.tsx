import "./Header.scss";
import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {changeTown} from "../../redux/actions/appActions";
import axios from "axios";
import {useSelector} from "react-redux";
import {appReduxState} from "../../interfaces/appReduxState";
import {NavLink} from "react-router-dom";
import {Menu, Dropdown} from "antd";
import {
  EnvironmentOutlined,
  UserOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import {LoginModal} from "../LoginModal/LoginModal";

export const Header: React.FC = () => {
  const dispatch = useDispatch();

  const town = useSelector((state: appReduxState) => state.app.town);
  const [townList, setTownList] = useState([]);

  useEffect(() => {
    const savedTown: string | null = localStorage.getItem("town");

    axios.get("/townApi/getTownList").then((res) => {
      const townList = res.data.map(
        (townData: {name: string}) => townData.name,
      );

      if (!savedTown) {
        dispatch(changeTown(townList[0]));
      } else {
        dispatch(changeTown(savedTown));
      }

      setTownList(townList);
    });
  }, []);

  const setActiveTown = (townName: string) => {
    dispatch(changeTown(townName));
    localStorage.setItem("town", townName);
  };

  const townDropdownData = (
    <Menu>
      {townList.map((townName) => (
        <Menu.Item key={townName} onClick={() => setActiveTown(townName)}>
          {townName}
        </Menu.Item>
      ))}
    </Menu>
  );

  const [showModal, setShowModal] = useState(false);

  return (
    <div className='app__wrapper'>
      <div className='header_top'>
        <div className='header_top__town'>
          <EnvironmentOutlined />
          <Dropdown overlay={townDropdownData} trigger={["click"]}>
            <p>{town}</p>
          </Dropdown>
          <CaretDownOutlined className='arrow-icon' />
        </div>
        <ul className='header_top__menu'>
          <li className='header_top__menu__item'>
            <NavLink to={"/delivery"}>Доставка и оплата</NavLink>
          </li>
          <li className='header_top__menu__item'>
            <NavLink to={"/contacts"}>Магазины</NavLink>
          </li>
          <li
            className='header_top__menu__item'
            onClick={() => setShowModal(true)}
          >
            <a>
              <UserOutlined /> <span>Войти</span>
              <LoginModal
                closeModal={() => setShowModal(false)}
                visible={showModal}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
