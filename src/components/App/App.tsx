import "./App.scss";
import React, {useEffect} from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import {Login} from "Pages/Login/Login";
import {Home} from "Pages/Home/Home";
import {Header} from "Components/Header/Header";
import {message} from "antd";
import {useDispatch} from "react-redux";
import {CHECK_AUTH} from "Redux/types/appTypes";

message.config({
  duration: 2,
  maxCount: 3,
  rtl: true,
});

export const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({type: CHECK_AUTH});
  }, []);

  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
      </Switch>
    </HashRouter>
  );
};
