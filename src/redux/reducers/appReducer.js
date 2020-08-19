import {CHANGE_TOWN} from "../types/appTypes.js";

const initialState = {
  town: "",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TOWN:
      return {...state, town: action.payload};
    default:
      return state;
  }
};
