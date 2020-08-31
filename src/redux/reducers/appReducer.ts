import {CHANGE_TOWN, SAVE_CURRENT_USER, SAVE_TOWNS_LIST} from "../types/appTypes";

const initialState = {
  serverUrl:
    process.env.NODE_ENV === "development" ? "http://localhost:4050" : "https://portfolio-1-server.herokuapp.com",
  town: "",
  townsList: [],
  currentUser: {},
};

export const appReducer = (state = initialState, action: {type: string; payload?: any}) => {
  switch (action.type) {
    case CHANGE_TOWN:
      return {...state, town: action.payload};
    case SAVE_TOWNS_LIST:
      return {...state, townsList: action.payload};
    case SAVE_CURRENT_USER:
      return {...state, currentUser: action.payload};
    default:
      return state;
  }
};
