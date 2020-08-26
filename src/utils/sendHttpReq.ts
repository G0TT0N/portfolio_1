import axios from "axios";
import {message} from "antd";
import {
  IHttpSuccessResponse,
  IHttpErrorResponse,
} from "Ts/interfaces/appInterfaces/http";

export const sendHttpReq = async (
  method: string,
  url: string,
  data?: {
    [name: string]: any;
  },
) => {
  return await axios[method](url, data)
    .then((res: IHttpSuccessResponse) => res)
    .catch((err: IHttpErrorResponse) => {
      message.error(err.response.data);
      return err.response;
    });
};
