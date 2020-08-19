import "./Header.scss";
import React from "react";
import {EnvironmentOutlined} from "@ant-design/icons";
import {useDispatch, useSelector, RootStateOrAny} from "react-redux";
import {connect} from "react-redux";
import {changeTown} from "../../redux/actions/appActions";

interface RootState {
  app: {
    town: string;
  };
}

export const Header: React.FC = () => {
  const dispatch = useDispatch();

  const town = useSelector((state: RootState) => state.app.town);

  return (
    <div>
      <div className='header__top'>
        <div className='header__top__town'>
          <EnvironmentOutlined />
          <p>{town}</p>
          <button onClick={() => dispatch(changeTown("1123"))}>123</button>
        </div>
      </div>
    </div>
  );
};
