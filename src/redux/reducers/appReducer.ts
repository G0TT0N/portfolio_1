import {CHANGE_TOWN, SAVE_CURRENT_USER} from "../types/appTypes";

const initialState = {
  town: "",
  currentUser: {},
};

export const appReducer = (
  state = initialState,
  action: {type: string; payload?: any},
) => {
  switch (action.type) {
    case CHANGE_TOWN:
      return {...state, town: action.payload};
    case SAVE_CURRENT_USER:
      return {...state, currentUser: action.payload};
    default:
      return state;
  }
};
