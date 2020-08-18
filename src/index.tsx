import React from "react";
import {render} from "react-dom";
import {App} from "./components/App/App";
import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4200"
    : "https://portfolio-1-server.herokuapp.com";
// axios.defaults.baseURL = "https://portfolio-1-server.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Access-Control-Allow-Origin"] =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4200"
    : "https://g0tt0n.github.io";
axios.defaults.headers.post["Access-Control-Allow-Methods"] =
  "GET, POST, PATCH, PUT, DELETE, OPTIONS";
axios.defaults.headers.post["Access-Control-Allow-Headers"] =
  "Origin, X-Auth-Token,Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With";

render(<App />, document.getElementById("root"));
