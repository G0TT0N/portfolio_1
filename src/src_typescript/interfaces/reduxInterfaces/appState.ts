export interface IAppState {
  app: {
    serverUrl: string;
    town: string;
    townsList: string[];
    currentUser: {
      id: string;
      email: string;
      name: string;
      phone: string;
    };
  };
}
