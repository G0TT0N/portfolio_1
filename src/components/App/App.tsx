import "./App.scss";
import React, {useEffect} from "react";
import {HashRouter, Switch, Route} from "react-router-dom";
import {Login} from "Pages/Login/Login";
import {Home} from "Pages/Home/Home";
import {Header} from "Components/Header/Header";
import {message} from "antd";
import {sendHttpReq} from "Utils/sendHttpReq";
import {saveCurrentUser} from "Redux/actions/appActions";
import {IHttpSuccessResponse} from "Ts/interfaces/appInterfaces/http";
import {useDispatch} from "react-redux";

message.config({
  duration: 2,
  maxCount: 3,
  rtl: true,
});

export const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      sendHttpReq("post", "/authApi/checkToken", {prevToken: token}).then(
        (res: IHttpSuccessResponse) => {
          if (res.data.userId) {
            dispatch(saveCurrentUser(res.data.userId));
          } else {
            localStorage.removeItem("token");
          }
        },
      );
    }
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
