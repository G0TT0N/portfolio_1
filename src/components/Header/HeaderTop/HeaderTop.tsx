import "./HeaderTop.scss";
import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {changeTown} from "Redux/actions/appActions";
import {useSelector} from "react-redux";
import {IAppState} from "Ts/interfaces/reduxInterfaces/appState";
import {NavLink} from "react-router-dom";
import {Menu, Dropdown} from "antd";
import {AuthModal} from "Components/AuthModal/AuthModal";
import {sendHttpReq} from "Utils/sendHttpReq";
import {
  EnvironmentOutlined,
  UserOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";

export const HeaderTop: React.FC = () => {
  const dispatch = useDispatch();

  const userName = useSelector(
    (state: IAppState) => state.app.currentUser.name,
  );

  const town = useSelector((state: IAppState) => state.app.town);
  const [townList, setTownList] = useState<string[]>([]);

  useEffect(() => {
    const savedTown: string | null = localStorage.getItem("town");

    sendHttpReq("get", "/townApi/getTownList").then((res) => {
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

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
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
          <NavLink to={"/delivery"}>Delivery and payment </NavLink>
        </li>
        <li className='header_top__menu__item'>
          <NavLink to={"/contacts"}>Shops</NavLink>
        </li>
        <li className='header_top__menu__item'>
          <a>
            <UserOutlined />{" "}
            {userName ? (
              <span>{userName}</span>
            ) : (
              <span onClick={() => setShowModal(true)}>Sign In</span>
            )}
            <AuthModal
              closeModal={() => setShowModal(false)}
              visible={showModal}
            />
          </a>
        </li>
      </ul>
    </div>
  );
};
