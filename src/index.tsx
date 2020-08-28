import "antd/dist/antd.min.css";
import "Media/fonts/fonts.css";
import React from "react";
import {render} from "react-dom";
import {App} from "Components/App/App";
import axios from "axios";
import {rootReducer} from "Redux/reducers/rootReducer";
import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import {Provider} from "react-redux";
import {sagaWatcher} from "Redux/sagas/sagaWatcher";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:4050" : "https://portfolio-1-server.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] =
  process.env.NODE_ENV === "development" ? "http://localhost:4200" : "https://g0tt0n.github.io";
axios.defaults.headers.post["Access-Control-Allow-Methods"] = "GET, POST, PATCH, PUT, DELETE, OPTIONS";
axios.defaults.headers.post["Access-Control-Allow-Headers"] =
  "Origin, X-Auth-Token,Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With";

const composeEnhancers =
  typeof window === "object" &&
  process.env.NODE_ENV === "development" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const saga = createSagaMiddleware();

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, saga)));

saga.run(sagaWatcher);

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
