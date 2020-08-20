import "./App.scss";
import React from "react";
import axios from "axios";
import {HashRouter, Switch, Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changeTown} from "../../redux/actions/appActions";
import {Login} from "../../pages/Login/Login";
import {Home} from "../../pages/Home/Home";
import {Header} from "../Header/Header";

export const App: React.FC = () => {
  const dispatch = useDispatch();

  const savedTown: string | null = localStorage.getItem("town");

  if (!savedTown) {
    axios.get("/town").then((res) => {
      dispatch(changeTown(res.data[0].name));
    });
  } else {
    dispatch(changeTown(savedTown));
  }

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
