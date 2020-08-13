import "../../index.css";
import "../../media/fonts/fonts.css";
import "./App.scss";
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Login } from "../../pages/Login/Login";
import { Home } from "../../pages/Home/Home";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
