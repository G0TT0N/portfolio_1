export interface IAppState {
  app: {
    serverUrl: string;
    town: string;
    currentUser: {
      id: string;
      email: string;
      name: string;
      phone: string;
    };
  };
}
