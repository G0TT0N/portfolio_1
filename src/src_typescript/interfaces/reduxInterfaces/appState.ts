export interface IAppState {
  app: {
    town: string;
    currentUser: {
      id: string;
      email: string;
      name: string;
      phone: string;
    };
  };
}
