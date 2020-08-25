export interface IAppState {
  app: {
    town: string;
    currentUser: {
      token: string;
      userId: string;
    };
  };
}
