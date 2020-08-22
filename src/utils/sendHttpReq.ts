import axios from "axios";
import {message} from "antd";

type httpData = {
  [name: string]: any;
};

export const sendHttpReq = async (
  method: string,
  url: string,
  data?: httpData,
) => {
  return await axios[method](url, data)
    .then((res) => res)
    .catch((err) => {
      message.error(err.response.data);
      return err.response;
    });
};
