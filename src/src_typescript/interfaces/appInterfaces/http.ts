export interface IHttpSuccessResponse {
  data: {[name: string]: any};
  status: number;
  statusText: string;
}

export interface IHttpErrorResponse {
  response: {
    config: {[name: string]: any};
    data: string;
    headers: {[name: string]: any};
    request: {[name: string]: any};
    status: number;
    statusText: string;
  };
}

export interface ILoginData {
  email?: string;
  password?: string;
}

export interface IRegisterData {
  name?: string;
  email?: string;
  password?: string;
  confirm?: string;
  phone?: string;
}
